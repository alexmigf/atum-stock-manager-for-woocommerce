<?php
/**
 * An abstraction layer of WC Bundle Product to be able to handle ATUM's custom data.
 *
 * @package         Atum\Models
 * @subpackage      Products
 * @author          BE REBEL - https://berebel.studio
 * @copyright       ©2025 Stock Management Labs™
 *
 * @since           1.5.1
 */

namespace Atum\Models\Products;

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( '\WC_Product_Bundle' ) ) {
	return;
}

use Atum\Models\Interfaces\AtumProductInterface;

class AtumProductBundle extends \WC_Product_Bundle implements AtumProductInterface {

	// Import the shared stuff.
	use AtumProductTrait;

	/**
	 * Initialize ATUM bundle product
	 *
	 * @since 1.5.0
	 *
	 * @param \WC_Product|int $product Product instance or ID.
	 */
	public function __construct( $product = 0 ) {

		$this->data = apply_filters( 'atum/model/product_bundle/data', array_merge( $this->data, $this->atum_data ) );
		parent::__construct( $product );

		do_action( 'atum/model/product_bundle', $product );

	}

}
