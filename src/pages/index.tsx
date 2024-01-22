import Layout from "../components/Layout";
import { useAuth } from "../utils/contexts/auth";

const Index = () => {
  const { user } = useAuth();
  return (
    <Layout>
      <p>{JSON.stringify(user)}</p>
    </Layout>
  );
};

export default Index;
