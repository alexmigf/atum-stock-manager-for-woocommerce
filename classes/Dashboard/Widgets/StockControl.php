<?php
/**
 * @package     Atum
 * @subpackage  Dashboard\Widgets
 * @author      Salva Machí and Jose Piera - https://sispixels.com
 * @copyright   ©2018 Stock Management Labs™
 *
 * @since       1.4.0
 *
 * Stock Control Widget for ATUM Dashboard
 */

namespace Atum\Dashboard\Widgets;

defined( 'ABSPATH' ) or die;

use Atum\Components\AtumWidget;
use Atum\Dashboard\WidgetHelpers;
use Atum\Inc\Helpers;
use Atum\StockCentral\StockCentral;


class StockControl extends AtumWidget {

	/**
	 * The id of this widget
	 * @var string
	 */
	protected $id = ATUM_PREFIX . 'stock_control_widget';

	/**
	 * Stock Control constructor
	 */
	public function __construct() {

		$this->title       = __( 'Stock Control', ATUM_TEXT_DOMAIN );
		$this->description = __( 'In, Low and Out of Stock Statistics', ATUM_TEXT_DOMAIN );
		$this->thumbnail   = ATUM_URL . 'assets/images/dashboard/widget-thumb-stock-control.png';

		parent::__construct();

	}

	/**
	 * @inheritDoc
	 */
	public function init() {

		// TODO: Load the config for this widget??
	}

	/**
	 * @inheritDoc
	 */
	public function render() {

		$stock_counters = WidgetHelpers::get_stock_levels();

		$sc_url = add_query_arg( 'page', StockCentral::UI_SLUG, admin_url('admin.php') );
		$sc_links = array(
			'in_stock'  => add_query_arg( 'v_filter', 'in_stock', $sc_url ),
			'out_stock' => add_query_arg( 'v_filter', 'out_stock', $sc_url ),
			'low_stock' => add_query_arg( 'v_filter', 'low_stock', $sc_url ),
			'unmanaged' => add_query_arg( 'v_filter', 'unmanaged', $sc_url )
		);

		$config = $this->get_config();

		Helpers::load_view( 'widgets/stock-control', compact('stock_counters', 'sc_links', 'config') );

	}

	/**
	 * @inheritDoc
	 */
	public function get_config() {
		// TODO: IMPLEMENT WIDGET SETTINGS
		return '';//Helpers::load_view_to_string( 'widgets/stock-control-config' );
	}

}