import {
	Avatar,
	Badge,
	Box,
	Button,
	Flex,
	Text,
	VStack,
} from '@/app/chakra/chakra';
import React from 'react';
import { IUserData } from '../types/types';
import Repos from './Repos';

interface UserProfileProps {
	userData: IUserData;
	loading: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData, loading }) => {
	console.log(userData);
	return (
		<>
			<Flex
				my={16}
				border={'2px solid'}
				borderColor={'green.500'}
				borderRadius={4}
				padding={8}
			>
				<VStack gap={5}>
					<Avatar
						size={'2xl'}
						src={userData.avatar_url}
						name={userData.name}
					/>
					<Button colorScheme="whatsapp">
						<a href={userData.html_url} target="_blank">
							View Profile
						</a>
					</Button>
				</VStack>
				<VStack ml={8} alignItems={'self-start'}>
					<Flex gap={4}>
						<Badge fontSize={'0.9em'} colorScheme="orange">
							Followers: {userData.followers}
						</Badge>
						<Badge fontSize={'0.9em'} colorScheme="pink">
							Following: {userData.following}
						</Badge>
						<Badge fontSize={'0.9em'} colorScheme="cyan">
							Public Repos: {userData.public_repos}
						</Badge>
						<Badge fontSize={'0.9em'} colorScheme="purple">
							Public Gists: {userData.public_gists}
						</Badge>
					</Flex>

					<Text
						fontSize={'2xl'}
						fontWeight={'bold'}
						mt={4}
						color="green.400"
					>
						<b>Name:</b> {userData.name}
					</Text>
					<Text
						fontSize={'2xl'}
						fontWeight={'bold'}
						mt={4}
						color="green.400"
					>
						{userData.bio}
					</Text>
					<Box>
						<Text fontSize={'md'}>
							<Text
								as={'span'}
								color="green.200"
								fontWeight={'bold'}
							>
								Company:
							</Text>{' '}
							{userData.company || 'Not Specified'}
						</Text>
						<Text fontSize={'md'}>
							<Text
								as={'span'}
								color="green.200"
								fontWeight={'bold'}
							>
								Location:
							</Text>{' '}
							{userData.location || 'Not Specified'}
						</Text>
						<Text fontSize={'md'}>
							<Text
								as={'span'}
								color="green.200"
								fontWeight={'bold'}
							>
								Blog/Website:
							</Text>{' '}
							{userData.blog ? (
								<a
									href={userData.blog}
									target="_blank"
									rel="noreferrer"
								>
									{userData.blog}
								</a>
							) : (
								'Not Specified'
							)}
						</Text>
						<Text fontSize={'md'}>
							<Text
								as={'span'}
								color="green.200"
								fontWeight={'bold'}
							>
								Member Since:
							</Text>{' '}
							{new Date(userData.created_at).toLocaleDateString()}
						</Text>
					</Box>
				</VStack>
			</Flex>
			{/* <Repos /> */}
		</>
	);
};

export default UserProfile;
