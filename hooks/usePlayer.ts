'use client';

import { useState, useEffect } from 'react';

export function usePlayer() {
  const [id, setId] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setId(localStorage.getItem('playerId'));
    setName(localStorage.getItem('playerName'));
  }, []);

  return { id, name };
}
