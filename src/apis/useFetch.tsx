
import { useState, useEffect } from 'react';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

interface EstadoUsuarios {
  data: Usuario[] | null;
  loading: boolean;
  error: string | null;
}

export function useFetchUsuarios(p0: string): EstadoUsuarios {
  const [data, setData] = useState<Usuario[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar usuarios');
        return res.json();
      })
      .then((usuarios: Usuario[]) => {
        setData(usuarios);
        setLoading(false);
      })
      .catch((err) => {
        setError((err as Error).message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
