<?php
/**
 * An abstraction layer of WC Variable Subscription Product to be able to handle ATUM's custom data.
 *
 * @package         Atum\Models
 * @subpackage      Products
 * @author          BE REBEL - https://berebel.studio
 * @copyright       ©2025 Stock Management Labs™
 *
 * @since           1.5.0
 */

namespace Atum\Models\Products;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WC_Product_Variable_Subscription' ) ) {
	return;
}

use Atum\Models\Interfaces\AtumProductInterface;

class AtumProductVariableSubscription extends \WC_Product_Variable_Subscription implements AtumProductInterface {

	// Import the shared stuff.
	use AtumProductTrait;

	/**
	 * Initialize ATUM simple product
	 *
	 * @since 1.5.0
	 *
	 * @param \WC_Product|int $product Product instance or ID.
	 */
	public function __construct( $product = 0 ) {

		$this->data = apply_filters( 'atum/model/product_variable_subscription/data', array_merge( $this->data, $this->atum_data ) );
		parent::__construct( $product );

		do_action( 'atum/model/product_variable_subscription', $product );

	}

}
