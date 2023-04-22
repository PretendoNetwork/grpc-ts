// * Export friends server service
import * as Service from '@/friends/friends_service';

// * Export friends server methods
import * as AcceptFriendRequest from '@/friends/accept_friend_request_rpc';
import * as DenyFreindRequest from '@/friends/deny_friend_request_rpc';
import * as GetUserFriendPIDs from '@/friends/get_user_friend_pids_rpc';
import * as GetUserFriendRequestsIncoming from '@/friends/get_user_friend_requests_incoming_rpc';
import * as SendUserFriendRequest from '@/friends/send_user_friend_request_rpc';
import * as SendUserNotification from '@/friends/send_user_notification_wiiu_rpc';

// * Export friends server types
import * as FriendRequest from '@/friends/friend_request';

export default {
	...Service,
	...AcceptFriendRequest,
	...DenyFreindRequest,
	...GetUserFriendPIDs,
	...GetUserFriendRequestsIncoming,
	...SendUserFriendRequest,
	...SendUserNotification,
	...FriendRequest
};