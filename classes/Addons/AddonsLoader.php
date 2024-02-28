<?php
/** @noinspection ALL */
/**
  * ATUM WooCommerce Inventory Management and Stock Tracking
  * @author      Be Rebel - https://berebel.io
  * @copyright   ©2024 Stock Management Labs™
 */
 namespace Atum\Addons; defined('ABSPATH') || die; use Atum\Components\AtumAdminNotices; use Atum\Components\AtumAdminModal; use Atum\Inc\Helpers; final class AddonsLoader { private $mz_ze = array('action_logs' => '1.1.5', 'export_pro' => '1.3.4', 'multi_inventory' => '1.5.0', 'product_levels' => '1.6.0', 'purchase_orders' => '0.0.1', 'stock_takes' => '0.0.1', 'pick_pack' => '0.0.1', 'barcodes_pro' => '0.0.1', 'units_of_measure' => '0.0.1', 'cost_price' => '0.0.1'); private $zpgVs = array('action_logs' => '1.3.8', 'export_pro' => '1.5.8', 'multi_inventory' => '1.8.4', 'product_levels' => '1.9.0', 'purchase_orders' => '1.1.6', 'stock_takes' => '1.0.0', 'pick_pack' => '1.0.0', 'barcodes_pro' => '0.0.1', 'units_of_measure' => '0.0.1', 'cost_price' => '0.0.1'); private static $guxJX = []; private static $yLn57 = []; private $cCc3c; public function __construct() { goto FLNQy; FLNQy: $this->cCc3c = defined('ATUM_DEBUG') && TRUE === ATUM_DEBUG; goto aY3Mf; mh9Hp: add_action('after_setup_theme', array($this, 'load_addons'), 99); goto E20WI; aY3Mf: $lxmLq = (array) apply_filters('atum/addons/loader/extra_addons', []); goto ZFzUq; r5YiO: foreach ($lxmLq as $YTAOq => $P9DqZ) { goto j96CY; mvlhG: fCjJo: goto Se25L; Pr2RU: $this->zpgVs[$YTAOq] = $P9DqZ; goto mvlhG; j96CY: if (!(!array_key_exists($YTAOq, $this->zpgVs) && version_compare($P9DqZ, '0.0', '>'))) { goto fCjJo; } goto Pr2RU; Se25L: fdX0o: goto bw6m1; bw6m1: } goto s1Te7; E20WI: $this->check_addons(); goto OobnO; PB6ZC: O816y: goto mh9Hp; ZFzUq: if (empty($lxmLq)) { goto O816y; } goto r5YiO; s1Te7: ZbPxz: goto PB6ZC; OobnO: } public function load_addons() { goto gHyBO; YkEjx: $AFsWm->add_modal('trial-expired', array('icon' => 'warning', 'title' => _n('ATUM trial license expired!', 'ATUM trial licenses expired!', count($Rj232), ATUM_TEXT_DOMAIN), 'showCancelButton' => FALSE, 'showConfirmButton' => FALSE, 'customClass' => ['container' => 'atum-trial-modal'], 'footer' => sprintf(__('Why are these add-ons expired and blocked? %1$sREAD INFO%2$s', ATUM_TEXT_DOMAIN), '&nbsp;<a href="https://stockmanagementlabs.crunch.help/en/atum-core/atum-trials" target="_blank">', '</a>')), Helpers::load_view_to_string('add-ons/expired-trials-modal', ['expired_trials' => $Rj232])); goto dXVNO; GcwRI: $q6Avq = Addons::get_addons_paths(); goto fWR4k; t5XgE: $AFsWm = AtumAdminModal::get_instance([ATUM_SHORT_NAME . '-addons']); goto mKCiX; RVIxU: sJdeq: goto EdbaF; dXVNO: oXB7t: goto fkv9p; fkv9p: if (!(count(self::$yLn57) > 0)) { goto Ip3li; } goto rTli1; QaQb7: if (empty($Rj232)) { goto oXB7t; } goto uEjtx; PP04A: wPa3Q: goto QaQb7; uEjtx: add_action('admin_enqueue_scripts', function () { goto rqx8T; r5BPD: wp_register_script('atum-trials-modal', ATUM_URL . 'assets/js/build/atum-trials-modal.js', ['jquery', 'sweetalert2'], ATUM_VERSION, TRUE); goto b0ahp; rqx8T: Helpers::register_swal_scripts(); goto r5BPD; b0ahp: wp_localize_script('atum-trials-modal', 'atumTrialsModal', array('cancel' => __('Cancel', ATUM_TEXT_DOMAIN), 'extend' => __('Yes, Extend it!', ATUM_TEXT_DOMAIN), 'nonce' => wp_create_nonce(ATUM_PREFIX . 'manage_license'), 'ok' => __('OK', ATUM_TEXT_DOMAIN), 'success' => __('Success!', ATUM_TEXT_DOMAIN), 'trialExtension' => __('Trial extension', ATUM_TEXT_DOMAIN), 'trialWillExtend' => __('You are going to extend this trial for 7 days more', ATUM_TEXT_DOMAIN))); goto TR6nU; TR6nU: }, 1); goto t5XgE; d1XI0: Ip3li: goto RVIxU; fWR4k: foreach ($xCd5Z as $ZlcHV => $ZKxk4) { goto P5R6h; r1TMZ: RZtQd: goto R7_LG; Kz_Zr: self::$yLn57[] = $ZlcHV; goto d1gjC; WSALz: goto t9HgZ; goto zenpp; GF1OX: goto t9HgZ; goto fxV6G; DQDKU: goto t9HgZ; goto t6n0N; S31Qi: goto t9HgZ; goto Pj3Tc; okVGL: self::$yLn57[] = $ZlcHV; goto XUjOM; nA3iE: $Rj232[$ZlcHV] = $ZKxk4; goto dlCjn; uH8kk: if (!version_compare($this->zpgVs[$mwiMK], $ZKxk4['version'], '>')) { goto bU_vL; } goto NsLRj; xt0tV: $Rj232[$ZlcHV]['extended'] = $qUIyg[$HWPBH]['extended'] ?? FALSE; goto QTuAJ; g4_wn: $YZFE0 = sprintf(__('The ATUM %1$s could not be loaded because its license is missing. Please, activate your trial from the %2$sadd-ons%3$s page.', ATUM_TEXT_DOMAIN), $ZKxk4['name'], '<a href="' . add_query_arg('page', 'atum-addons', admin_url('admin.php')) . '">', '</a>'); goto csJeT; KDQSW: Z6Vhr: goto f0c8X; P5R6h: $tus24 = str_contains($ZlcHV, '_trial') || str_contains($ZKxk4['basename'], 'trial'); goto U6P_H; d1gjC: goto t9HgZ; goto vHgXc; I4miR: $HWPBH = strtolower($q6Avq[$mwiMK]['name'] ?? ''); goto ex3Z3; CO2J8: Addons::delete_status_transient($HWPBH); goto S31Qi; ggUPo: $this->show_notices($ZKxk4, $YZFE0); goto wklHK; QaoX7: $gvWeP = add_query_arg($OtrQZ, Addons::ADDONS_STORE_URL . 'my-upgrades/'); goto vQvEu; ntX0z: VBDsT: goto Ux6vs; x9M8O: self::$yLn57[] = $ZlcHV; goto aQjrc; iR2S8: if (!(!$H0Qt7 && !empty($this->mz_ze[$ZlcHV]) && version_compare($this->mz_ze[$ZlcHV], $ZKxk4['version'], '<'))) { goto tUVcM; } goto UgnQl; B0ZW_: $this->show_notices($ZKxk4, $YZFE0); goto xDTp5; NaFZ_: goto t9HgZ; goto R7rnv; zenpp: h5pDa: goto FYsL7; CqVDu: self::$yLn57[] = $ZlcHV; goto GF1OX; wKCS8: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto p3Su2; PfOGE: if (!(isset($xCd5Z[$mwiMK]) || !$this->cCc3c && !empty($q6Avq[$mwiMK]['basename']) && file_exists(WP_PLUGIN_DIR . '/' . $q6Avq[$mwiMK]['basename']))) { goto BV29r; } goto aM6Xn; tLPpu: if (!$tus24) { goto utn9U; } goto PfOGE; IDZvG: tUVcM: goto ntX0z; vHgXc: bU_vL: goto tLPpu; UgnQl: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto iCIXT; Jn7Ez: $OtrQZ = array('key' => $qUIyg[$HWPBH]['key'], 'url' => home_url()); goto QaoX7; dlCjn: $Rj232[$ZlcHV]['expires'] = $qUIyg[$HWPBH]['expires'] ?? 'now'; goto ALQQ9; MPne0: self::$yLn57[] = $ZlcHV; goto CO2J8; vQvEu: $YZFE0 = sprintf('trial_used' === $qUIyg[$HWPBH]['status'] ? __('The ATUM %1$s could not be loaded because it has already been used on another site. Please, %2$supgrade to the full version%3$s.', ATUM_TEXT_DOMAIN) : __('The ATUM %1$s could not be loaded because its license is invalid. Please, %2$supgrade to the full version%3$s.', ATUM_TEXT_DOMAIN), $ZKxk4['name'], '<a href="' . $gvWeP . '" target="_blank">', '</a>'); goto ggUPo; AufIo: self::$yLn57[] = $ZlcHV; goto IDZvG; iCIXT: array_pop(self::$guxJX); goto AufIo; Q64gr: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto x9M8O; U6P_H: $mwiMK = $tus24 ? str_replace('_trial', '', $ZlcHV) : $ZlcHV; goto I4miR; ZhmGu: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto Kz_Zr; XUjOM: Addons::delete_status_transient($HWPBH); goto WSALz; R7rnv: tcnEV: goto qo7lj; Pj3Tc: BV29r: goto c7QhK; FYsL7: if (!(empty($qUIyg[$HWPBH]['expires']) || strtotime($qUIyg[$HWPBH]['expires']) <= time())) { goto tcnEV; } goto nA3iE; NsLRj: $YZFE0 = sprintf(__('The ATUM %1$s add-on requires at least version %2$s to work with the current ATUM version. Please, update it.', ATUM_TEXT_DOMAIN), $ZKxk4['name'], $this->zpgVs[$mwiMK]); goto NmXH4; aQjrc: Addons::delete_status_transient($HWPBH); goto DQDKU; Iml8u: if (!in_array($qUIyg[$HWPBH]['status'], ['trial_used', 'invalid', 'disabled', 'missing', 'key_mismatch'])) { goto h5pDa; } goto Jn7Ez; fxV6G: Yp3op: goto uH8kk; qo7lj: utn9U: goto xbHYI; csJeT: $this->show_notices($ZKxk4, $YZFE0); goto Q64gr; wklHK: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto okVGL; p3Su2: self::$yLn57[] = $ZlcHV; goto NaFZ_; QTuAJ: if ('now' === $Rj232[$ZlcHV]['expires']) { goto RZtQd; } goto bqD6G; aADAx: goto Z6Vhr; goto r1TMZ; c7QhK: if (!(empty($qUIyg) || empty($qUIyg[$HWPBH]) || empty($qUIyg[$HWPBH]['key']))) { goto oLzZW; } goto g4_wn; t6n0N: oLzZW: goto Iml8u; f0c8X: $this->show_notices($ZKxk4, $YZFE0 . ' ' . sprintf(__('Click %1$shere%2$s to purchase the full version.', ATUM_TEXT_DOMAIN), '<a href="' . $ZKxk4['addon_url'] . '" target="_blank">', '</a>')); goto wKCS8; ALQQ9: $Rj232[$ZlcHV]['key'] = $qUIyg[$HWPBH]['key']; goto xt0tV; bqD6G: $YZFE0 = sprintf(__('Your ATUM %1$s has expired on %2$s, and it has been disabled.', ATUM_TEXT_DOMAIN), $ZKxk4['name'], date_i18n(get_option('date_format'), strtotime($qUIyg[$HWPBH]['expires']))); goto aADAx; xDTp5: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto CqVDu; mEVuQ: $H0Qt7 = call_user_func($ZKxk4['bootstrap']); goto iR2S8; iFJPK: self::$guxJX[] = $ZlcHV; goto mEVuQ; R7_LG: $YZFE0 = sprintf(__('Your ATUM %1$s has expired and it has been disabled.', ATUM_TEXT_DOMAIN), $ZKxk4['name']); goto KDQSW; NmXH4: $this->show_notices($ZKxk4, $YZFE0); goto ZhmGu; aM6Xn: $YZFE0 = sprintf(__('The ATUM %s could not be loaded because the full version is installed. To use the trial, uninstall the full version first.', ATUM_TEXT_DOMAIN), $ZKxk4['name']); goto MoVs0; MoVs0: $this->show_notices($ZKxk4, $YZFE0); goto YUjGd; xbHYI: if (!(!empty($ZKxk4['bootstrap']) && is_callable($ZKxk4['bootstrap']))) { goto VBDsT; } goto iFJPK; icHWD: $YZFE0 = sprintf(__('The ATUM %s add-on could not be loaded because is not a known add-on.', ATUM_TEXT_DOMAIN), $ZKxk4['name']); goto B0ZW_; Ux6vs: t9HgZ: goto FLnnH; YUjGd: $xCd5Z[$ZlcHV]['bootstrap'] = NULL; goto MPne0; ex3Z3: if (isset($this->zpgVs[$mwiMK])) { goto Yp3op; } goto icHWD; FLnnH: } goto PP04A; mKCiX: $AFsWm->set_js_dependencies(['atum-trials-modal']); goto YkEjx; gHyBO: $xCd5Z = Addons::get_installed_addons(); goto riqfA; sPdmp: $qUIyg = Addons::get_keys(); goto GcwRI; riqfA: if (empty($xCd5Z)) { goto sJdeq; } goto wtpG1; rTli1: Addons::set_installed_addons($xCd5Z); goto d1XI0; wtpG1: $Rj232 = []; goto sPdmp; EdbaF: } public function check_addons() { add_filter('atum/queues/recurring_hooks', function ($kyoWp) { $kyoWp['atum/check_addons'] = array('time' => 'now', 'interval' => DAY_IN_SECONDS); return $kyoWp; }); add_action('atum/check_addons', function () { goto CpKGp; mIgFb: $H_jTJ = FALSE; goto Wg5_9; JtM2Y: $A5L98 = Addons::get_installed_addons(); goto RA172; RA172: if (!(FALSE !== Addons::get_last_api_access('check_addons'))) { goto kdv3p; } goto krGlv; OZmeX: dYsoL: goto ltEOt; krGlv: return; goto SvFfy; CpKGp: $EbIGf = Addons::get_keys(); goto JtM2Y; Wg5_9: foreach ($A5L98 as $RiyQe) { goto ouVTu; qj5YY: $lqJg1['trial'] = TRUE; goto mHJAd; pM_SW: $lqJg1 = $SBcJg; goto N05ns; ptA94: $H_jTJ = TRUE; goto UnyXe; mHJAd: ywT1R: goto Ii2qN; RUPAo: hR5fA: goto RBRuz; ThEWl: pvV10: goto xJE8i; RBRuz: if (empty(array_diff_assoc($SBcJg, $lqJg1))) { goto eersH; } goto wyIud; eGGjo: $lqJg1['extended'] = TRUE; goto RUPAo; xJE8i: s_MMK: goto I17rv; bVhwi: jBRM9: goto Y0LnJ; wyIud: Addons::update_key($iUFnU, $lqJg1); goto YvIL5; qikyf: if (!(!is_wp_error($WzJ31) && isset($SBcJg['status']) && 'valid' === $SBcJg['status'])) { goto pvV10; } goto B1on0; N05ns: if (!$kFz1I) { goto NQOH8; } goto hCZRk; uwe8H: $lqJg1['status'] = $kFz1I->aKuRO; goto Eek_Y; ouVTu: $iUFnU = strtolower($RiyQe['name']); goto kwIvF; UnyXe: $SBcJg = $EbIGf[$HWPBH]; goto pFcUi; hCZRk: if (!($SBcJg['status'] !== $kFz1I->aKuRO)) { goto OqNPC; } goto uwe8H; E0C1f: $HWPBH = trim(str_replace('trial', '', $iUFnU)); goto qjAJv; YvIL5: eersH: goto X80Dw; aUlFU: $lqJg1['expires'] = $kFz1I->eiOLH ?? date_i18n('Y-m-d H:i:s'); goto bVhwi; ycRCk: D_yZJ: goto S6j_0; qjAJv: if (!(is_array($EbIGf) && array_key_exists($HWPBH, $EbIGf))) { goto s_MMK; } goto ptA94; Y0LnJ: if (!(empty($SBcJg['trial']) && isset($kFz1I->nAvZ1) && TRUE === $kFz1I->nAvZ1)) { goto ywT1R; } goto qj5YY; I17rv: D8WIq: goto ycRCk; B1on0: $kFz1I = json_decode(wp_remote_retrieve_body($WzJ31)); goto pM_SW; Ii2qN: if (!(empty($SBcJg['extended']) && (!isset($kFz1I->LNPiy) || TRUE !== $kFz1I->LNPiy))) { goto hR5fA; } goto eGGjo; pFcUi: $WzJ31 = Addons::check_license($iUFnU, $SBcJg['key']); goto qikyf; Eek_Y: OqNPC: goto IQtmf; IQtmf: if (!(empty($SBcJg['expires']) || $SBcJg['expires'] !== $kFz1I->eiOLH)) { goto jBRM9; } goto aUlFU; X80Dw: NQOH8: goto ThEWl; kwIvF: if (!str_contains($iUFnU, 'trial')) { goto D8WIq; } goto E0C1f; S6j_0: } goto OZmeX; SvFfy: kdv3p: goto mIgFb; ltEOt: if (!$H_jTJ) { goto VgIba; } goto F_sW1; F_sW1: Addons::set_last_api_access('check_addons'); goto wucqc; wucqc: VgIba: goto gtRUE; gtRUE: }); } private function show_notices($ZKxk4, $YZFE0) { AtumAdminNotices::add_notice($YZFE0, strtolower($ZKxk4['name']), 'error', FALSE, TRUE); add_action('after_plugin_row_' . $ZKxk4['basename'], function ($o5BS0, $tGAnh) use($YZFE0) { goto fQLbA; j03cX: echo $YZFE0; goto rlqSJ; rlqSJ: ?></p>
					</div>
				</td>
			</tr>
			<style>tr[data-plugin="<?php  goto MiQV7; MiQV7: echo esc_attr($o5BS0); goto UfiE6; fQLbA: ?>
			<tr class="plugin-update-tr active">
				<td colspan="4" class="plugin-update colspanchange">
					<div class="notice inline notice-error notice-alt">
						<p><?php  goto j03cX; Ll5PU: echo esc_attr($o5BS0); goto szjoQ; UfiE6: ?>"] th, tr[data-plugin="<?php  goto Ll5PU; szjoQ: ?>"] td { box-shadow: none !important; }</style>
			<?php  goto N5H0e; N5H0e: }, 100, 2); } public static function get_bootstrapped_addons() { return self::$guxJX; } public static function get_non_bootstrapped_addons() { return self::$yLn57; } public static function check_addon($YTAOq, $iUFnU, $FHi5Z) { goto gzDNL; n96EE: return TRUE; goto lot2q; rzDJ7: return FALSE; goto flT1Q; gzDNL: if (!(stripos($YTAOq, '_trial') === FALSE)) { goto VHhwQ; } goto rzDJ7; KIW_l: return FALSE; goto psfM0; psfM0: Uop1M: goto CQuUm; flT1Q: VHhwQ: goto zvYDM; CQuUm: if (!(stripos($FHi5Z, '-trial.php') === FALSE)) { goto iLetS; } goto WmmuL; ZTGjJ: iLetS: goto n96EE; WmmuL: return FALSE; goto ZTGjJ; zvYDM: if (!(stripos($iUFnU, 'Trial') === FALSE)) { goto Uop1M; } goto KIW_l; lot2q: } }