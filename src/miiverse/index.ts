// * Export Miiverse server service
import * as Service from '@/miiverse/miiverse_service';

// * Export Miiverse server methods
import * as SMMRequestPostID from '@/miiverse/smm_request_post_id_rpc';

export default {
	...Service,
	...SMMRequestPostID
};