import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import api from '../../services/api';

import { SelectInput, AsyncSelectInput } from '../../components/Form';
import Button from '../../components/Button';

import { UnForm } from './styles';

interface ReposOptions {
  value: string;
  label: string;
}

interface Repo {
  name: string;
  full_name: string;
}

interface LoadOptionsCallback {
  (repos: ReposOptions[]): void;
}

interface SelectFormData {
  name: string;
  repo: string;
}

const ReactSelect: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [searchOption, setSearchOption] = useState('repos');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [repositorySelected, setRepositorySelected] = useState<string>('');
  const [reposOptions, setReposOptions] = useState<ReposOptions[]>([]);

  const optionsSelect = [
    { value: 'repos', label: 'Owner' },
    { value: 'starred', label: 'Starred' },
  ];

  const toggleOption = useCallback(() => {
    setLoading(true);
    setSearchOption(state => (state === 'repos' ? 'starred' : 'repos'));
    setRepositorySelected('');
    formRef.current?.clearField('repo');
  }, []);

  const loadOptions = useCallback(
    (inputValue: string, callback: LoadOptionsCallback) => {
      const data = reposOptions.filter(repo => repo.label.includes(inputValue));

      callback(data);
    },
    [reposOptions],
  );

  const handleRepositoryChange = useCallback(data => {
    setRepositorySelected(data?.value);
  }, []);

  const handleLoadPage = useCallback(async () => {
    try {
      const response = await api.get<Repo[]>(
        `/users/EliasGcf/${searchOption}`,
        {
          params: {
            page: page + 1,
          },
        },
      );

      if (response.data.length !== 0) {
        const data = response.data.map(repo => ({
          label: repo.name,
          value: repo.full_name,
        }));

        setReposOptions(state => [...state, ...data]);
        setPage(page + 1);
      } else {
        throw new Error('No more repos to loading');
      }
    } catch (err) {
      window.alert(err.message);
    }
  }, [searchOption, page]);

  const handleSubmit = useCallback((data: SelectFormData) => {
    if (data.repo) {
      window.open(`https://github.com/${data.repo}`);
    }
  }, []);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get<Repo[]>(`/users/EliasGcf/${searchOption}`);

      const data = response.data.map(repo => ({
        label: repo.name,
        value: repo.full_name,
      }));

      setReposOptions(data);
      setLoading(false);
    }

    loadRepos();
  }, [searchOption]);

  return (
    <UnForm ref={formRef} onSubmit={handleSubmit}>
      <SelectInput
        name="name"
        defaultValue={optionsSelect[0]}
        onChange={toggleOption}
        options={optionsSelect}
      />
      <AsyncSelectInput
        name="repo"
        isLoading={loading}
        defaultOptions={reposOptions}
        loadOptions={loadOptions}
        onChange={handleRepositoryChange}
        onMenuScrollToBottom={handleLoadPage}
      />

      <Button type="submit">{`Open ${repositorySelected}`}</Button>
    </UnForm>
  );
};

export default ReactSelect;
