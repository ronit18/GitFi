import { Container, Text } from '@/app/chakra/chakra';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function Home() {
	return (
		<Container maxW="container.lg">
			<Navbar />
			<Text fontSize="2xl" textAlign="center" my={4}>
				Search users on Github
			</Text>
			<Search />
		</Container>
	);
}
