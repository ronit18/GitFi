'use client';
import React, { useState } from 'react';
import { Button, Input, useToast } from '@/app/chakra/chakra';

const Search = () => {
	const [query, setQuery] = useState('');

	const toast = useToast();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!query) return;
		try {
			const res = await fetch(`https://api.github.com/users/${query}`);
			const data = await res.json();
			if (data.message === 'Not Found') {
				return toast({
					title: 'Error',
					description:
						data.message === 'Not Found'
							? 'User not found'
							: data.message,
					status: 'error',
					duration: 3000,
					isClosable: true,
				});
			}
		} catch (err: any) {
			console.log('Error in components/Search.tsx: ', err);
			return toast({
				title: 'Error',
				description: err.message,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<form action="submit" onSubmit={handleSubmit}>
			<Input
				onChange={(e) => setQuery(e.target.value)}
				variant={'outline'}
				placeholder={'Type a username (i.e. @ronit18)'}
				focusBorderColor="green.500"
			/>
			<Button
				disabled={!query}
				opacity={!query ? 0.5 : 1}
				size="md"
				type="submit"
				colorScheme="whatsapp"
				mt={4}
			>
				Search
			</Button>
		</form>
	);
};

export default Search;
