// * Export account server service
import * as Service from '@/account/account_service';

// * Export account server methods
import * as GetBasicUSerData from '@/account/get_basic_user_data_rpc';
import * as IsBanned from '@/account/is_banned_rpc';
import * as Login from '@/account/login_rpc';
import * as RegisterPNID from '@/account/register_pnid_rpc';

// * Export account server types
import * as Mii from '@/account/mii';

export default {
	...Service,
	...GetBasicUSerData,
	...IsBanned,
	...Login,
	...RegisterPNID,
	...Mii
};