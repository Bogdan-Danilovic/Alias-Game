'use client';

import { useState, useEffect } from 'react';
import { AliasRoom } from '@/lib/types';
import { subscribeToRoom } from '@/lib/firestore';

export function useRoom(code: string) {
  const [room, setRoom] = useState<AliasRoom | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const unsub = subscribeToRoom(
      code,
      (r) => { setRoom(r); setLoading(false); },
      (err) => { setError(err.message); setLoading(false); }
    );
    return unsub;
  }, [code]);

  return { room, loading, error };
}
