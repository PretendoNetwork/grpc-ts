import {
	createChannel,
	createClient,
	Metadata
} from 'nice-grpc';
import {
	FriendsClient,
	FriendsDefinition
} from '../src/friends/friends_service';

async function main() {
	const channel = createChannel('localhost:50051');

	const client: FriendsClient = createClient(FriendsDefinition, channel);

	const response = await client.getUserFriendPIDs({
		pid: 123
	}, {
		metadata: Metadata({
			'X-API-Key': ''
		})
	});

	console.log(response)
}

main();