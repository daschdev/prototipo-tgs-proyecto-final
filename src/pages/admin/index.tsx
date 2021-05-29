import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const Admin: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/admin/time`);
  }, []);

  return null;
};

export default Admin;
