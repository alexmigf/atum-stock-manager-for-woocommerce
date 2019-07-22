<?php
/**
 * Add ATUM color schemes
 *
 * @package        Atum
 * @subpackage     Components
 * @author         Be Rebel - https://berebel.io
 * @copyright      ©2019 Stock Management Labs™
 *
 * @since          1.5.9
 */

namespace Atum\Components;

defined( 'ABSPATH' ) || die;

use Atum\Inc\Helpers;
use Atum\Modules\ModuleManager;


class AtumColors {

	/**
	 * User meta key where are saved the colors
	 */
	const COLORS_USER_META = 'color_scheme';

	/**
	 * The singleton instance holder
	 *
	 * @var AtumColors
	 */
	private static $instance;

	/**
	 * The ATUM colors
	 *
	 * @var array
	 */
	private $colors = array();

	/**
	 * AtumColors constructor
	 * 
	 * @since 1.5.9
	 */
	private function __construct() {

		$theme_settings = Helpers::get_option( 'theme_settings', 'branded_mode' );

		switch ( $theme_settings ) {
			case 'dark_mode':
				$prefix = 'dm_';
				break;

			case 'hc_mode':
				$prefix = 'hc_';
				break;

			default:
				$prefix = 'bm_';
				break;
		}

		$user_scheme = Helpers::get_atum_user_meta( self::COLORS_USER_META );
		$user_scheme = $user_scheme ?: array();

		$this->colors['gray_100']              = '#F8F9FA';
		$this->colors['gray_500']              = '#ADB5BD';
		$this->colors['dark']                  = '#343A40';
		$this->colors['gray_500_rgb']          = $this->convert_hexadecimal_to_rgb( $this->colors['gray_500'] );
		$this->colors['white']                 = '#FFFFFF';
		$this->colors['white_rgb']             = $this->convert_hexadecimal_to_rgb( $this->colors['white'] );
		$this->colors['black']                 = '#000000';
		$this->colors['black_rgb']             = $this->convert_hexadecimal_to_rgb( $this->colors['black'] );
		$this->colors['blue']                  = '#00B8DB';
		$this->colors['blue_dark']             = '#27283B';
		$this->colors['green']                 = '#69C61D';
		$this->colors['orange']                = '#EFAF00';
		$this->colors['primary_color']         = ! empty( $user_scheme[ "{$prefix}primary_color" ] ) ? $user_scheme[ "{$prefix}primary_color" ] : $this->colors['blue'];
		$this->colors['primary_color_rgb']     = $this->convert_hexadecimal_to_rgb( $this->colors['primary_color'] );
		$this->colors['primary_color_light']   = ! empty( $user_scheme[ "{$prefix}primary_color_light" ] ) ? $user_scheme[ "{$prefix}primary_color_light" ] : '#F5FDFF';
		$this->colors['primary_color_dark']    = ! empty( $user_scheme[ "{$prefix}primary_color_dark" ] ) ? $user_scheme[ "{$prefix}primary_color_dark" ] : '#DBF9FF';
		$this->colors['secondary_color']       = ! empty( $user_scheme[ "{$prefix}secondary_color" ] ) ? $user_scheme[ "{$prefix}secondary_color" ] : '#EFAF00';
		$this->colors['secondary_color_rgb']   = $this->convert_hexadecimal_to_rgb( $this->colors['secondary_color'] );
		$this->colors['secondary_color_light'] = ! empty( $user_scheme[ "{$prefix}secondary_color_light" ] ) ? $user_scheme[ "{$prefix}secondary_color_light" ] : '#FFF4D6';
		$this->colors['secondary_color_dark']  = ! empty( $user_scheme[ "{$prefix}secondary_color_dark" ] ) ? $user_scheme[ "{$prefix}secondary_color_dark" ] : '#FFEDBC';
		$this->colors['tertiary_color']        = ! empty( $user_scheme[ "{$prefix}tertiary_color" ] ) ? $user_scheme[ "{$prefix}tertiary_color" ] : $this->colors['green'];
		$this->colors['tertiary_color_rgb']    = $this->convert_hexadecimal_to_rgb( $this->colors['tertiary_color'] );
		$this->colors['tertiary_color_light']  = ! empty( $user_scheme[ "{$prefix}tertiary_color_light" ] ) ? $user_scheme[ "{$prefix}tertiary_color_light" ] : $this->colors['green'];
		$this->colors['tertiary_color_dark']   = ! empty( $user_scheme[ "{$prefix}tertiary_color_dark" ] ) ? $user_scheme[ "{$prefix}tertiary_color_dark" ] : '#B4F0C9';
		$this->colors['ext_color']             = ! empty( $user_scheme[ "{$prefix}text_color" ] ) ? $user_scheme[ "{$prefix}text_color" ] : '#6C757D';
		$this->colors['text_color_rgb']        = $this->convert_hexadecimal_to_rgb( $this->colors['text_color'] );
		$this->colors['text_color_2']          = ! empty( $user_scheme[ "{$prefix}text_color_2" ] ) ? $user_scheme[ "{$prefix}text_color_2" ] : '#ADB5BD';
		$this->colors['text_color_2_rgb']      = $this->convert_hexadecimal_to_rgb( $this->colors['text_color_2'] );
		$this->colors['text_color_expanded']   = ! empty( $user_scheme[ "{$prefix}text_color_expanded" ] ) ? $user_scheme[ "{$prefix}text_color_expanded" ] : $this->colors['white'];
		$this->colors['border_color']          = ! empty( $user_scheme[ "{$prefix}border_color" ] ) ? $user_scheme[ "{$prefix}border_color" ] : '#E9ECEF';
		$this->colors['border_color_rgb']      = $this->convert_hexadecimal_to_rgb( $this->colors['border_color'] );
		$this->colors['bg_1_color']            = ! empty( $user_scheme[ "{$prefix}bg_1_color" ] ) ? $user_scheme[ "{$prefix}bg_1_color" ] : $this->colors['white'];
		$this->colors['bg_1_color_rgb']        = $this->convert_hexadecimal_to_rgb( $this->colors['bg_1_color'] );
		$this->colors['bg_2_color']            = ! empty( $user_scheme[ "{$prefix}bg_2_color" ] ) ? $user_scheme[ "{$prefix}bg_2_color" ] : $this->colors['gray_100'];
		$this->colors['danger_color']          = ! empty( $user_scheme[ "{$prefix}danger_color" ] ) ? $user_scheme[ "{$prefix}danger_color" ] : '#FF4848';
		$this->colors['title_color']           = ! empty( $user_scheme[ "{$prefix}title_color" ] ) ? $user_scheme[ "{$prefix}title_color" ] : '#27283B';

		// Add the Visual Settings.
		if ( ModuleManager::is_module_active( 'visual_settings' ) && AtumCapabilities::current_user_can( 'edit_visual_settings' ) ) {
			add_filter( 'atum/settings/tabs', array( $this, 'add_settings_tab' ) );
			add_filter( 'atum/settings/defaults', array( $this, 'add_settings_defaults' ) );
		}

	}

	/**
	 * Convert hexadecimal to rgb
	 *
	 * @param string $hex_value
	 *
	 * @since 1.5.9
	 *
	 * @return string
	 */
	public function convert_hexadecimal_to_rgb( $hex_value ) {

		list( $r, $g, $b ) = sscanf( $hex_value, '#%02x%02x%02x' );

		return "$r, $g, $b";

	}

	/**
	 * Get High Contrast mode colors
	 *
	 * @since 1.5.9
	 *
	 * @return string
	 */
	public function get_high_contrast_mode_colors() {

		$secondary_color       = $this->colors['primary_color'];
		$secondary_color_light = $this->colors['primary_color_light'];
		$secondary_color_dark  = $this->colors['primary_color_dark'];
		$tertiary_color        = $this->colors['primary_color'];
		$tertiary_color_light  = $this->colors['primary_color_light'];
		$text_color            = '#016B7F';
		$text_color_2          = '#27283b';
		$text_color_expanded   = '#ffffff';
		$border_color          = '#adb5bd';
		$bg_1_color            = '#ffffff';
		$bg_2_color            = '#ffffff';
		$danger_color          = '#FF4848';
		$title_color           = $this->colors['primary_color'];

		$scheme = ":root {
			--wp-yiq-text-light: $text_color_expanded;
			--danger: $danger_color;
			--blue: {$this->colors['primary_color']};
			--wp-link: {$this->colors['primary_color']};
			--primary: {$this->colors['primary_color']};
			--primary-hover: {$this->colors['white']};
			--primary-hover-text: {$this->colors['primary_color']};
			--primary-hover-border: solid 1px {$this->colors['primary_color']};
			--orange: $secondary_color;
			--dash-blue-trans: {$this->colors['primary_color_light']};
			--orange-light-2: $secondary_color_light;
			--orange-light: $secondary_color_dark;
			--warning: $secondary_color;
			--atum-pagination-border-disabled: $border_color;
			--warning-hover: {$this->colors['white']};
			--warning-hover-text: $secondary_color;
			--warning-hover-border: solid 1px $secondary_color;
			--purple-pl: {$this->colors['primary_color']};
		    --purple-pl-hover: rgba({$this->colors['primary_color_rgb']}, 0.6);
		    --wp-pink-darken-expanded: {$this->colors['primary_color']};
			--gray-600:$text_color_2;
			--green: $tertiary_color;
			--white-shadow: rgba({$this->colors['border_color_rgb']}, 0.2);
			--green-light: {$this->colors['primary_color_dark']};
			--green-light-2: $tertiary_color_light;
			--success: $tertiary_color;
			--success-hover: {$this->colors['white']};
			--success-hover-text: $tertiary_color;
			--success-hover-border: solid 1px $tertiary_color;
			--atum-page-title-action: $tertiary_color;
			--atum-table-item-heads: $text_color_2;
			--atum-table-row-even: $bg_2_color;
			--blue-hover: rgba({$this->colors['primary_color_rgb']}, 0.6);
		    --atum-table-row-odd: $bg_1_color;
		    --atum-row-active: {$this->colors['primary_color_dark']};
			--atum-table-views-tabs: $text_color;
			--atum-table-views-tabs-active: {$this->colors['primary_color']};
			--atum-table-link-child: {$this->colors['primary_color']};
			--atum-input-placeholder: $text_color_2;
			--atum-select2-selected-text: {$this->colors['primary_color']};
			--atum-select2-selected-bg: {$this->colors['primary_color_dark']};
			--atum-table-link-active: {$this->colors['primary_color']};
			--atum-table-check: {$this->colors['primary_color']};
			--atum-table-bg: $bg_1_color;
			--atum-table-icon: $text_color_2;
			--js-scroll-bg: {$this->colors['primary_color']};
			--atum-table-icon-active: $text_color;
			--atum-table-text-active: $text_color;
			--atum-table-text-expanded: $text_color_expanded;
			--atum-table-search-text: $text_color_expanded;
			--atum-table-search-text-disabled: $text_color_2;
			--atum-table-search-bg: $secondary_color;
			--atum-settings-heads-bg: {$this->colors['primary_color']};
			--atum-settings-nav-link: {$this->colors['primary_color']};
			--atum-pagination-bg-disabled: $bg_2_color;
			--atum-pagination-disabled: $text_color_2;
			--atum-pagination-text: $text_color_2;
			--atum-border: $border_color;
			--atum-border-expanded: $border_color;
			--atum-footer-totals: $bg_1_color;
			--atum-footer-bg: {$this->colors['white']};
			--atum-dropdown-toggle-bg: {$this->colors['gray_100']};
			--atum-icon-tree: $text_color;
			--atum-settings-nav-link-selected: {$this->colors['primary_color']};
			--atum-settings-nav-link-selected-bg: {$this->colors['primary_color_dark']};
			--atum-settings-section-title: $title_color;
			--atum-settings-section-description: $text_color_2;
			--atum-settings-btn-save-text: {$this->colors['primary_color']};
			--atum-settings-btn-save-text-hover:
			--overflow-opacity-rigth: linear-gradient(to right, rgba({$this->colors['bg_1_color_rgb']}, 0), rgba({$this->colors['bg_1_color_rgb']}, 0.9));
			--overflow-opacity-left: linear-gradient(to left, rgba({$this->colors['bg_1_color_rgb']}, 0), rgba({$this->colors['bg_1_color_rgb']}, 0.9));
			--dash-card-text: {$this->colors['blue_dark']};
			--dash-nice-select-text: $text_color;
			--dash-nice-select-disabled-after: lighten({$this->colors['text_color_rgb']}, 20%);
			--dash-nice-select-arrow-color: $text_color;
			--dash-nice-select-text-highlighted: {$this->colors['primary_color']};
			--dash-add-widget-color: {$this->colors['gray_500']};
			--dash-input-placeholder: $text_color;
			--dash-video-subs-text: $text_color_2;
			--atum-settings-section-text: $text_color_2;
			--atum-settings-input-text: $text_color;
			--atum-settings-wp-color-text: $text_color;
			--atum-settings-input-border: $border_color;
			--atum-settings-border-color: $border_color;
			--atum-settings-separator: $border_color;
			--atum-table-row-child-variation: {$this->colors['primary_color_dark']};
			--atum-table-row-child-variation-even: {$this->colors['primary_color_light']};
			--dash-border: $border_color;
			--dash-subscription-input: transparent;
			--dash-card-bg: $bg_1_color;
			--dash-h5-text: {$this->colors['primary_color']};
			--dash-nice-select-bg: $bg_1_color;
			--dash-nice-select-list-bg: $bg_1_color;
			--dash-nice-select-border: $border_color;
		    --dash-nice-select-hover: {$this->colors['primary_color']};
		    --dash-nice-select-text: $text_color_2;
		    --dash-nice-select-arrow-color: $text_color;
		    --dash-nice-select-option-hover: {$this->colors['primary_color_light']};
		    --dash-nice-select-option-selected-bg: {$this->colors['primary_color_light']};
		    --dash-nice-select-text-highlighted: {$this->colors['primary_color']};
			--dash-input-group-bg: rgba({$this->colors['bg_1_color_rgb']}, 0.3);
			--dash-input-group-shadow: rgba({$this->colors['bg_1_color_rgb']}, 0.3);
			--dash-input-placeholder: {$this->colors['primary_color']};
			--dash-widget-header-title: $title_color;
			--dash-statistics-ticks: $text_color;
			--dash-statistics-grid-lines: rgba({$this->colors['text_color_rgb']}, 0.2);
			--dash-statistics-chart-type-bg: transparent;
			--dash-statistics-chart-type-selected-bg: $secondary_color;
			--dash-statistics-chart-type-selected-text: $text_color_expanded;
			--dash-statistics-legend-switch-bg: transparent;
			--dash-widget-separator: $border_color;
			--dash-widget-icon: $border_color;
		    --dash-widget-text: $text_color_2;
			--dash-stats-data-widget-primary: {$this->colors['primary_color']};
		    --dash-stats-data-widget-success: $tertiary_color;
			--dash-stock-control-chart-border: $bg_1_color;
			--dash-next-text: $text_color_2;
			--dash-video-title: {$this->colors['dark']};
			--dash-video-subs-text $text_color_2;
			--atum-marketing-popup-bg: $bg_1_color;
			--dash-widget-current-stock-value-text: white;
			--dash-widget-current-stock-value-bg: {$this->colors['primary_color']};
			--atum-select2-border: $border_color;
			--atum-version: {$this->colors['blue_dark']};
			--atum-version-bg: rgba({$this->colors['black_rgb']}, 0.1);
			--atum-table-filter-dropdown: {$this->colors['blue_dark']};
			--atum-footer-title: {$this->colors['blue_dark']};
			--atum-table-link-text: $text_color;
		}";

		return apply_filters( 'atum/get_high_contrast_mode_colors', $scheme );

	}

	/**
	 * Get Dark Mode colors
	 *
	 * @since 1.5.9
	 *
	 * @return string
	 */
	public function get_dark_mode_colors() {

		$bg_1_color     = '#31324A';
		$bg_1_color_rgb = $this->convert_hexadecimal_to_rgb( $bg_1_color );
		$bg_2_color     = '#3B3D5A';

		$scheme = ":root {
			--wp-yiq-text-light: {$this->colors['text_color_2']};
			--danger: {$this->colors['danger_color']};
			--blue: {$this->colors['primary_color']};
			--blue-light: $bg_1_color;
			--wp-link: {$this->colors['primary_color']};
			--primary: {$this->colors['primary_color']};
			--primary-hover: rgba({$this->colors['primary_color_rgb']}, 0.6);
			--primary-hover-text: {$this->colors['blue_dark']};
			--primary-hover-border: 1px solid transparent;
			--orange: {$this->colors['orange']};
			--atum-pagination-border-disabled: rgba({$this->colors['border_color_rgb']}, 0.0);
			--orange-light-2: {$this->colors['secondary_color_light']};
			--orange-light: {$this->colors['secondary_color_dark']};
			--warning: {$this->colors['secondary_color']}; 
			--warning-hover: rgba({$this->colors['secondary_color_rgb']}, 0.6); 
			--warning-hover-text: {$this->colors['blue_dark']};
			--warning-hover-border: 1px solid transparent;
			--gray-600: {$this->colors['text_color']};
			--gray-500: {$this->colors['text_color']};
			--green: {$this->colors['tertiary_color_light']};
			--green-light: rgba({$this->colors['tertiary_color_rgb']}, 0.6);
			--green-light-2: {$this->colors['tertiary_color_light']};
			--success: {$this->colors['tertiary_color']};
			--success-hover: rgba({$this->colors['tertiary_color_rgb']}, 0.6);
			--success-hover-text: {$this->colors['blue_dark']};
			--success-hover-border: 1px solid transparent;
			--atum-page-title-action: {$this->colors['tertiary_color_light']};
			--atum-table-item-heads: {$this->colors['text_color']};
			--atum-table-row-even: $bg_2_color;
			--blue-hover: rgba({$this->colors['primary_color_rgb']},0.6);
		    --atum-table-row-odd: $bg_1_color;
		    --atum-column-groups-bg: {$this->colors['blue_dark']};
		    --atum-border: rgba({$this->colors['border_color_rgb']}, 0.2);
		    --atum-border-expanded: rgba({$this->colors['border_color_rgb']}, 0.2);
		    --popover-black-shadow: rgba({$this->colors['border_color_rgb']}, 0.2);
		    --atum-table-row-variation-text: {$this->colors['text_color_2']};
		    --atum-row-active: {$this->colors['primary_color_light']};
		    --js-scroll-bg: {$this->colors['text_color']};
			--atum-table-views-tabs: {$this->colors['text_color']};
			--atum-table-views-tabs-active: {$this->colors['primary_color']};
			--atum-table-views-tabs-active-text: {$this->colors['text_color_2']};
			--atum-table-link-child: {$this->colors['primary_color_dark']};
			--atum-input-placeholder: {$this->colors['text_color']};
			--atum-select2-selected-text: {$this->colors['primary_color_dark']};
			--atum-select2-selected-bg: {$this->colors['primary_color_light']};
			--atum-table-link-active: {$this->colors['primary_color_dark']};
			--atum-table-check: {$this->colors['primary_color_dark']};
			--atum-table-bg: $bg_1_color;
			--atum-table-icon: {$this->colors['text_color']};
			--atum-table-icon-active: {$this->colors['text_color_2']};
			--atum-table-text-active: {$this->colors['text_color_2']};
			--atum-table-text-expanded: {$this->colors['text_color_expanded']};
			--atum-table-search-text: {$this->colors['blue_dark']};
			--atum-table-search-text-disabled: {$this->colors['blue_dark']};
			--atum-table-search-bg: {$this->colors['secondary_color']};
			--atum-pagination-bg-disabled: $bg_2_color;
			--atum-pagination-disabled: {$this->colors['text_color']};
			--atum-pagination-text: {$this->colors['text_color_2']};
			--atum-footer-totals: {$this->colors['blue_dark']};
			--atum-footer-bg: {$this->colors['blue_dark']};
			--atum-dropdown-toggle-bg: $bg_2_color;
			--atum-icon-tree: {$this->colors['text_color']};
			--atum-settings-nav-bg: $bg_1_color;
			--atum-settings-heads-bg: $bg_1_color;
			--atum-settings-nav-link: {$this->colors['text_color']};
			--atum-settings-section-bg: $bg_1_color;
			--atum-settings-nav-link-selected: {$this->colors['text_color_2']};
			--atum-settings-nav-link-selected-bg: {$this->colors['primary_color_light']};
			--atum-settings-section-title: {$this->colors['title_color']};
			--atum-settings-section-description: {$this->colors['text_color']};
			--atum-settings-btn-save: {$this->colors['primary_color']};
			--atum-settings-btn-save-hover: rgba({$this->colors['primary_color_rgb']},0.7);
			--atum-settings-btn-save-text: {$this->colors['text_color_2']};
			--atum-settings-btn-save-text-hover: {$this->colors['text_color_2']};
			--atum-settings-text-logo: {$this->colors['text_color']};
			--atum-settings-separator: rgba({$this->colors['border_color_rgb']},0.2);
			--overflow-opacity-rigth: linear-gradient(to right, rgba($bg_1_color_rgb,0), rgba($bg_1_color_rgb,0.9));
			--overflow-opacity-left: linear-gradient(to left, rgba($bg_1_color_rgb,0), rgba($bg_1_color_rgb,0.9));
			--dash-border: rgba({$this->colors['text_color_rgb']}, 0.5);
			--dash-card-text: {$this->colors['text_color']};
			--dash-nice-select-text: {$this->colors['text_color']};
			--dash-nice-select-disabled-after: lighten({$this->colors['text_color_rgb']}, 20%);
			--dash-nice-select-arrow-color: {$this->colors['text_color']};
			--dash-nice-select-text-highlighted: {$this->colors['primary_color']};
			--dash-add-widget-color: {$this->colors['gray_500']};
			--dash-add-widget-color-dark: {$this->colors['blue_dark']};
			--dash-input-placeholder: {$this->colors['text_color']};
			--atum-settings-section-text: {$this->colors['text_color']};
			--atum-settings-input-text: {$this->colors['text_color_2']};
			--atum-settings-border-color: rgba({$this->colors['border_color_rgb']}, 0.2);
			--atum-settings-wp-color-text: {$this->colors['text_color']};
			--atum-table-row-child-variation: {$this->colors['primary_color_light']};
			--atum-table-row-child-variation-even: {$this->colors['primary_color_light']};
			--dash-subscription-input: transparent;
			--dash-card-bg: $bg_1_color;
			--dash-h5-text: {$this->colors['primary_color']};
			--dash-nice-select-bg: $bg_1_color;
			--dash-nice-select-list-bg: $bg_1_color;
			--dash-nice-select-border: rgba({$this->colors['text_color_rgb']}, 0.5);
		    --dash-nice-select-hover: {$this->colors['primary_color_light']};
		    --dash-nice-select-text: {$this->colors['text_color']};
		    --dash-nice-select-arrow-color: {$this->colors['text_color']};
		    --dash-nice-select-option-hover: {$this->colors['primary_color_light']};
		    --dash-nice-select-option-selected-bg: {$this->colors['primary_color_light']};
		    --dash-nice-select-text-highlighted: {$this->colors['primary_color_dark']};
			--dash-input-group-bg: rgba(0, 0, 0, 0.3);
			--dash-input-group-shadow: rgba(0, 0, 0, 0.3);
			--dash-input-placeholder: {$this->colors['primary_color']};
			--dash-widget-header-title: {$this->colors['title_color']};
			--dash-statistics-ticks: {$this->colors['text_color']};
			--dash-statistics-grid-lines: rgba({$this->colors['text_color_rgb']}, 0.2);
			--dash-statistics-chart-type-bg: transparent;
			--dash-statistics-chart-type-selected-bg: $bg_1_color;
			--dash-statistics-chart-type-selected-text: {$this->colors['secondary_color']};
			--dash-statistics-legend-switch-bg: transparent;
			--dash-widget-separator: rgba({$this->colors['border_color_rgb']}, 0.2);
			--dash-widget-primary: {$this->colors['primary_color']};
		    --dash-widget-success: {$this->colors['tertiary_color']};
		    --dash-widget-warning: {$this->colors['secondary_color_light']};
		    --dash-widget-danger: {$this->colors['danger_color']};
		    --dash-widget-text: {$this->colors['text_color']};
			--dash-stats-data-widget-primary: {$this->colors['primary_color_light']};
		    --dash-stats-data-widget-success: {$this->colors['tertiary_color']};
			--dash-stock-control-chart-border: {$this->colors['blue_dark']};
			--dash-next-text: {$this->colors['gray_500']};
			--dash-video-title: {$this->colors['text_color']};
			--dash-video-subs-text: {$this->colors['gray_500']};
			--atum-marketing-popup-bg: $bg_1_color;
			--atum-select2-border: rgba({$this->colors['border_color_rgb']},0.5);
			--atum-add-widget-bg: {$this->colors['blue_dark']};
			--atum-add-widget-title: {$this->colors['text_color']};
			--atum-add-widget-separator: rgba({$this->colors['border_color_rgb']},0.2);
			--atum-table-filter-dropdown: {$this->colors['white']};
			--atum-footer-title: {$this->colors['white']};
			--atum-footer-link: {$this->colors['primary_color']};
			--atum-footer-text: {$this->colors['white']};
			--atum-table-link-text: {$this->colors['text_color_expanded']};
		}";

		return apply_filters( 'atum/get_dark_mode_colors', $scheme );

	}

	/**
	 * Get Branded Mode colors
	 *
	 * @since 1.5.9
	 *
	 * @return string
	 */
	public function get_branded_mode_colors() {

		$scheme = ":root {
			--wp-yiq-text-light: {$this->colors['text_color_expanded']};
			--danger: {$this->colors['danger_color']};
			--blue: {$this->colors['primary_color']};
			--wp-link: {$this->colors['primary_color']};
			--primary: {$this->colors['primary_color']};
			--primary-hover: rgba({$this->colors['primary_color_rgb']}, 0.6);
			--primary-hover-text: {$this->colors['text_color_expanded']};
			--primary-hover-border: 1px solid transparent;
			--orange: {$this->colors['secondary_color']};
			--orange-light-2: {$this->colors['secondary_color_light']};
			--orange-light: {$this->colors['secondary_color_dark']};
			--warning: {$this->colors['secondary_color']}; 
			--warning-hover: rgba({$this->colors['secondary_color_rgb']}, 0.6);
			--warning-hover-text: {$this->colors['text_color_expanded']};
			--warning-hover-border: 1px solid transparent;
			--gray-600: {$this->colors['text_color']};
			--green: {$this->colors['tertiary_color']};
			--green-light: rgba({$this->colors['tertiary_color_rgb']}, 0.6);
			--atum-pagination-border-disabled: {$this->colors['border_color']};
			--success: {$this->colors['tertiary_color']};
			--success-hover: rgba({$this->colors['tertiary_color_rgb']}, 0.6);
			--success-hover-text: {$this->colors['text_color_expanded']};
			--success-hover-border: 1px solid transparent;
			--atum-page-title-action: {$this->colors['tertiary_color']};
			--atum-table-item-heads: {$this->colors['text_color_2']};
			--atum-table-row-even: {$this->colors['bg_2_color']};
			--blue-hover: rgba({$this->colors['primary_color_rgb']}, 0.6);
		    --atum-table-row-odd: {$this->colors['bg_1_color']};
		    --js-scroll-bg: {$this->colors['text_color_2']};
		    --atum-row-active: {$this->colors['primary_color_dark']};
			--atum-table-views-tabs: {$this->colors['text_color']};
			--atum-table-views-tabs-active: {$this->colors['primary_color']};
			--atum-table-link-child: {$this->colors['primary_color']};
			--atum-input-placeholder: {$this->colors['text_color']};
			--atum-select2-selected-text: {$this->colors['primary_color']};
			--atum-select2-selected-bg: {$this->colors['primary_color_dark']};
			--atum-table-link-active: {$this->colors['primary_color']};
			--atum-table-check: {$this->colors['primary_color']};
			--atum-table-bg: {$this->colors['bg_1_color']};
			--atum-border: {$this->colors['border_color']};
			--atum-border-expanded: rgba({$this->colors['border_color_rgb']}, 0.2);
			--atum-table-icon: {$this->colors['text_color']};
			--atum-table-icon-active: {$this->colors['text_color']};
			--atum-table-text-active: {$this->colors['text_color']};
			--atum-table-text-expanded: {$this->colors['text_color_expanded']};
			--atum-table-search-text: {$this->colors['text_color_expanded']};
			--atum-table-search-text-disabled: {$this->colors['text_color_expanded']};
			--atum-table-search-bg: {$this->colors['secondary_color']};
			--atum-settings-heads-bg: {$this->colors['primary_color']};
			--atum-settings-nav-link: {$this->colors['primary_color']};
			--atum-pagination-bg-disabled: {$this->colors['bg_2_color']};
			--atum-pagination-disabled: {$this->colors['text_color']};
			--atum-pagination-text: {$this->colors['text_color']};
			--atum-footer-totals: {$this->colors['bg_1_color']};
			--atum-footer-bg: {$this->colors['white']};
			--atum-dropdown-toggle-bg: {$this->colors['bg_2_color']};
			--atum-icon-tree: {$this->colors['text_color']};
			--atum-settings-nav-link-selected: {$this->colors['primary_color']};
			--atum-settings-nav-link-selected-bg: {$this->colors['primary_color_dark']};
			--atum-settings-section-title: {$this->colors['title_color']};
			--atum-settings-section-description: {$this->colors['text_color_2']};
			--atum-settings-btn-save: {$this->colors['white']};
			--atum-settings-btn-save-hover: rgba({$this->colors['white_rgb']}, 0.7);
			--atum-settings-btn-save-text: {$this->colors['primary_color']};
			--atum-settings-btn-save-text-hover: {$this->colors['primary_color']};
			--atum-settings-input-border: {$this->colors['border_color']};
			--atum-settings-border-color: {$this->colors['border_color']};
			--atum-settings-separator: {$this->colors['border_color']};
			--overflow-opacity-rigth: linear-gradient(to right, rgba({$this->colors['bg_1_color_rgb']}, 0), rgba({$this->colors['bg_1_color_rgb']}, 0.9));
			--overflow-opacity-left: linear-gradient(to left, rgba({$this->colors['bg_1_color_rgb']}, 0), rgba({$this->colors['bg_1_color_rgb']}, 0.9));
			--dash-border: rgba({$this->colors['text_color_rgb']}, 0.5);
			--dash-card-text: {$this->colors['text_color']};
			--dash-nice-select-text: {$this->colors['text_color']};
			--dash-nice-select-border: rgba({$this->colors['text_color_rgb']}, 0.5);
			--dash-nice-select-disabled-after: lighten({$this->colors['text_color_rgb']}, 20%);
			--dash-nice-select-arrow-color: {$this->colors['text_color']};
			--dash-nice-select-text-highlighted: {$this->colors['primary_color']};
			--dash-add-widget-color: {$this->colors['gray_500']};
			--dash-add-widget-color-dark: {$this->colors['primary_color']};
			--dash-input-placeholder: {$this->colors['text_color']};
			--dash-video-title: {$this->colors['dark']};
			--dash-video-subs-text: {$this->colors['text_color']};
			--dash-widget-separator: {$this->colors['border_color']};
			--atum-settings-section-text: {$this->colors['text_color']};
			--atum-settings-input-text: {$this->colors['text_color']};
			--atum-settings-wp-color-text: {$this->colors['text_color']};
			--atum-table-row-child-variation: {$this->colors['primary_color_dark']};
			--atum-table-row-child-variation-even: {$this->colors['primary_color_light']};
			--dash-widget-primary: {$this->colors['primary_color']};
		    --dash-widget-success: {$this->colors['tertiary_color']};
		    --dash-widget-warning: {$this->colors['secondary_color']};
		    --dash-widget-danger: {$this->colors['danger_color']};
			--dash-widget-header-title: {$this->colors['title_color']};
		    --dash-statistics-chart-type-selected-text: {$this->colors['secondary_color']};
		    --dash-widget-text: {$this->colors['text_color']};
			--dash-stats-data-widget-primary: {$this->colors['primary_color']};
		    --dash-stats-data-widget-success: {$this->colors['tertiary_color']};
		    --atum-select2-border: {$this->colors['border_color']};
		    --atum-table-filter-dropdown: {$this->colors['gray_500']};
		    --atum-footer-title: {$this->colors['blue_dark']};
		    --atum-table-link-text: {$this->colors['text_color']};
		}";

		return apply_filters( 'atum/get_branded_mode_colors', $scheme );

	}

	/**
	 * Add a new tab to the ATUM settings page
	 *
	 * @since 1.5.9
	 *
	 * @param array $tabs
	 *
	 * @return array
	 */
	public function add_settings_tab( $tabs ) {

		$tabs['visual_settings'] = array(
			'tab_name' => __( 'Visual Settings', ATUM_TEXT_DOMAIN ),
			'icon'     => 'atmi-highlight',
			'sections' => array(
				'color_mode'   => __( 'Color Mode', ATUM_TEXT_DOMAIN ),
				'scheme_color' => __( 'Scheme Color', ATUM_TEXT_DOMAIN ),
			),
		);

		return $tabs;
	}

	/**
	 * Add fields to the ATUM settings page
	 *
	 * @since 1.5.9
	 *
	 * @param array $defaults
	 *
	 * @return array
	 */
	public function add_settings_defaults( $defaults ) {

		$color_settings = array(
			'theme_settings'           => array(
				'section' => 'color_mode',
				'name'    => __( 'Theme settings', ATUM_TEXT_DOMAIN ),
				'desc'    => '',
				'default' => '',
				'type'    => 'theme_selector',
				'options' => array(
					'values' => array(
						array(
							'key'   => 'branded_mode',
							'name'  => __( 'Branded Mode', ATUM_TEXT_DOMAIN ),
							'thumb' => 'branded_mode.png',
							'desc'  => __( 'Activate the Branded mode. Colour mode for the ATUM default branded colours.', ATUM_TEXT_DOMAIN ),
						),
						array(
							'key'   => 'dark_mode',
							'name'  => __( 'Dark Mode', ATUM_TEXT_DOMAIN ),
							'thumb' => 'dark_mode.png',
							'desc'  => __( 'Activate the Dark mode. Colour Mode for tired/weary eyes.', ATUM_TEXT_DOMAIN ),
						),
						array(
							'key'   => 'hc_mode',
							'name'  => __( 'High Contrast Mode', ATUM_TEXT_DOMAIN ),
							'thumb' => 'hc_mode.png',
							'desc'  => __( 'Activate the High Contrast mode.
											This mode is for users that find difficult viewing data
											while browsing the interface in ATUM\'s branded colours.', ATUM_TEXT_DOMAIN ),
						),
					),
				),
			),
			'bm_primary_color'         => array(
				'section' => 'scheme_color',
				'name'    => __( 'Primary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for links and editable values in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#00B8DB',
			),
			'hc_primary_color'         => array(
				'section' => 'scheme_color',
				'name'    => __( 'Primary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for links and editable values in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'hc_mode',
				'default' => '#016B7F',
			),
			'dm_primary_color'         => array(
				'section' => 'scheme_color',
				'name'    => __( 'Primary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for links and editable values in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#a8f1ff',
			),
			'bm_secondary_color'       => array(
				'section' => 'scheme_color',
				'name'    => __( 'Secondary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#EFAF00',
			),
			'dm_secondary_color'       => array(
				'section' => 'scheme_color',
				'name'    => __( 'Secondary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffdf89',
			),
			'bm_tertiary_color'        => array(
				'section' => 'scheme_color',
				'name'    => __( 'Tertiary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons and UX elements in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#69C61D',
			),
			'dm_tertiary_color'        => array(
				'section' => 'scheme_color',
				'name'    => __( 'Tertiary Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons and UX elements in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#baef8d',
			),
			'dm_tertiary_color_light'  => array(
				'section' => 'scheme_color',
				'name'    => __( 'Outside Elements Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons outside of ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#69C61D',
			),
			'bm_danger_color'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Danger Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for highlighted text and edited values in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#FF4848',
			),
			'dm_danger_color'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Danger Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for highlighted text and edited values in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffaeae',
			),
			'bm_title_color'           => array(
				'section' => 'scheme_color',
				'name'    => __( 'Titles Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for titles.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#27283B',
			),
			'dm_title_color'           => array(
				'section' => 'scheme_color',
				'name'    => __( 'Titles Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for titles.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#FFFFFF',
			),
			'bm_text_color'            => array(
				'section' => 'scheme_color',
				'name'    => __( 'Main Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the text in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#6C757D',
			),
			'dm_text_color'            => array(
				'section' => 'scheme_color',
				'name'    => __( 'Main Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the text in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#FFFFFF',
			),
			'bm_text_color_2'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Soft Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for secondary texts and UX elements in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#adb5bd',
			),
			'dm_text_color_2'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Soft Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for secondary texts and UX elements in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#31324A',
			),
			'bm_text_color_expanded'   => array(
				'section' => 'scheme_color',
				'name'    => __( 'Light Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons text and expanded row text in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#ffffff',
			),
			'dm_text_color_expanded'   => array(
				'section' => 'scheme_color',
				'name'    => __( 'Light Text Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for buttons text and expanded row text in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffffff',
			),
			'bm_border_color'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Borders Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for borders in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#e9ecef',
			),
			'dm_border_color'          => array(
				'section' => 'scheme_color',
				'name'    => __( 'Borders Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for borders in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffffff',
			),
			'bm_bg_1_color'            => array(
				'section' => 'scheme_color',
				'name'    => __( 'Primary Background Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for background color in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#ffffff',
			),
			'bm_bg_2_color'            => array(
				'section' => 'scheme_color',
				'name'    => __( 'Secondary Background Color', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the background color of striped rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#F8F9FA',
			),
			'bm_primary_color_light'   => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 1', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#f5fdff',
			),
			'hc_primary_color_light'   => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 1', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'hc_mode',
				'default' => '#f5fdff',
			),
			'dm_primary_color_light'   => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 1', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#dbf9ff',
			),
			'bm_primary_color_dark'    => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 2', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#dbf9ff',
			),
			'hc_primary_color_dark'    => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 2', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'hc_mode',
				'default' => '#e6fbff',
			),
			'dm_primary_color_dark'    => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 2', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#00b8db',
			),
			'bm_secondary_color_light' => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 3', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#fff4d6',
			),
			'dm_secondary_color_light' => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 3', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffdf89',
			),
			'bm_secondary_color_dark'  => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 4', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'branded_mode',
				'default' => '#ffedbc',
			),
			'dm_secondary_color_dark'  => array(
				'section' => 'scheme_color',
				'name'    => __( 'Colored Background Color 4', ATUM_TEXT_DOMAIN ),
				'desc'    => __( 'Mainly used for the striped background of expanded rows in ATUM tables.', ATUM_TEXT_DOMAIN ),
				'type'    => 'color',
				'display' => 'dark_mode',
				'default' => '#ffdf89',
			),
		);

		return array_merge( $defaults, $color_settings );

	}


	/*******************
	 * Instance methods
	 *******************/

	/**
	 * Cannot be cloned
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, esc_attr__( 'Cheatin&#8217; huh?', ATUM_TEXT_DOMAIN ), '1.0.0' );
	}

	/**
	 * Cannot be serialized
	 */
	public function __sleep() {
		_doing_it_wrong( __FUNCTION__, esc_attr__( 'Cheatin&#8217; huh?', ATUM_TEXT_DOMAIN ), '1.0.0' );
	}

	/**
	 * Get Singleton instance
	 *
	 * @return AtumColors instance
	 */
	public static function get_instance() {

		if ( ! ( self::$instance && is_a( self::$instance, __CLASS__ ) ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


}
