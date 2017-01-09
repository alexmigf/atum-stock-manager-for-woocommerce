<?php
/**
 * View for the Stock Counters help tab on Stock Central page
 *
 * @since 0.0.5
 */

defined( 'ABSPATH' ) or die;

?>
<table class="widefat fixed striped">
	<thead>
		<tr>
			<td><strong><?php _e( 'COLUMN', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><strong><?php _e( 'DEFINITION', ATUM_TEXT_DOMAIN ) ?></strong></td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong><?php _e( 'Current Stock', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "The current stock represents the amount of products available to order at the moment the stock central was last refreshed. This counter value equals the value shown in the 'Products' page of WooCommerce.", ATUM_TEXT_DOMAIN ) ?></td>
		</tr>
		<tr>
			<td><strong><?php _e( 'Inbound Stock', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "Inbound stock counter represents the amount of products ordered by the store admin or manager. This feature is not available in 'Basic' ATUM interface. Premium and PRO users will be able to add inbound stock using the 'Purchase Order' menu. The 'Purchase Orders' system will amend the inbound stock indicator automatically.", ATUM_TEXT_DOMAIN ) ?></td>
		</tr>
		<tr>
			<td><strong><?php _e( 'Stock on Hold', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "The 'Stock on Hold' value is an important indicator for stores that allow customers to add items to their baskets and leave them there unattended for a while. Products left in baskets are still physically in the warehouse, but not included in the 'Current Stock' indicator. You can set the time of the product being held by a customer under 'WooCommerce' - 'Settings' - 'Products' and the 'Inventory' tab." ) ?></td>
		</tr>
		<tr>
			<td><strong><?php _e( 'Reserved Stock', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "There are times when the store owner needs to reserve or set aside small or significant amount of stock. Occasions like special events, customer reservations or quality checks will find this feature very handy. Premium and PRO users will take advantage of this feature by creating reserve logs in the 'Stock Logs' section. ATUM plugin will then automatically deduct the reserved stock value from the 'Current Stock' indicator.", ATUM_TEXT_DOMAIN ) ?></td>
		</tr>
		<tr>
			<td><strong><?php _e( 'Back Orders', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "Every WooCommerce product has an 'Allow Back Orders' option within the product page. It will give customers the opportunity to place an order even when the product is out of stock. The 'Back Orders' indicator will display the amount of items required by customers.", ATUM_TEXT_DOMAIN ) ?></td>
		</tr>
		<tr>
			<td><strong><?php _e( 'Sold today', ATUM_TEXT_DOMAIN ) ?></strong></td>
			<td><?php _e( "The value represents the number of products sold during the day. Sold products are only items which status changed to completed. Items that are sold, but pending payment will show in the 'Stock on Hold' indicator instead.", ATUM_TEXT_DOMAIN ) ?></td>
		</tr>
	</tbody>
</table>