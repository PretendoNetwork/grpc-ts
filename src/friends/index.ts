// * Export friends server service
export * as FriendsService from '@/friends/friends_service';

// * Export friends server methods
export * as AcceptFriendRequest from '@/friends/accept_friend_request_rpc';
export * as DenyFreindRequest from '@/friends/deny_friend_request_rpc';
export * as GetUserFriendPIDs from '@/friends/get_user_friend_pids_rpc';
export * as GetUserFriendRequestsIncoming from '@/friends/get_user_friend_requests_incoming_rpc';
export * as SendUserFriendRequest from '@/friends/send_user_friend_request_rpc';
export * as SendUserNotification from '@/friends/send_user_notification_wiiu_rpc';

// * Export friends server types
export * as FriendRequest from '@/friends/friend_request';