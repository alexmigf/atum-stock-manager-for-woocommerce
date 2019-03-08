/* =======================================
   TOOLTIP
   ======================================= */

export default class Tooltip {
	
	constructor() {
		
		this.addTooltips();
		
	}
	
	/**
	 * Enable tooltips
	 *
	 * @param jQuery $wrapper   Optional. The wrapper where the elements with tooltips are contained,
	 */
	addTooltips($wrapper?: JQuery) {
		
		if (!$wrapper) {
			$wrapper = $('body');
		}
		
		$wrapper.find('.tips, .atum-tooltip').each( (index: number, elem: Element) => {
			
			const $tipEl: any = $(elem);
			
			$tipEl.tooltip({
				html     : true,
				title    : $tipEl.data('tip'),
				container: 'body',
			});
			
		});
		
		$wrapper.find('.select2-selection__rendered').each( (index: number, elem: Element) => {
			
			const $tipEl: any = $(elem);
			
			$tipEl.tooltip({
				html     : true,
				title    : $tipEl.attr('title'),
				container: 'body',
			});
			
		});
		
	}
	
	/**
	 * Destroy all the tooltips
	 *
	 * @param jQuery $wrapper   Optional. The wrapper where the elements with tooltips are contained
	 */
	destroyTooltips($wrapper?: JQuery) {
		
		if (!$wrapper) {
			$wrapper = $('body');
		}
		
		(<any>$wrapper.find('.tips, .atum-tooltip, .select2-selection__rendered')).tooltip('destroy');
		
	}
	
}