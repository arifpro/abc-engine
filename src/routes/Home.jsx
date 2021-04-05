import ProjectForm from '../components/HomePage/ProjectForm';
import Layout from '../components/Layout';

const Home = () => {
    const name = 'Home';

    return (
        <Layout>
            <h1>{name} page</h1>
            <ProjectForm />
        </Layout>
    );
};

export default Home;
