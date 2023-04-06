<?php
/** @noinspection ALL */
/**
  * @author      Be Rebel - https://berebel.io
  * @copyright   ©2023 Stock Management Labs™
 */
 namespace Atum\Addons; defined('ABSPATH') || die; use Atum\Components\AtumAdminNotices; use Atum\Components\AtumAdminModal; use Atum\Inc\Helpers; final class AddonsLoader { private $beqvv = array('action_logs' => '1.1.5', 'export_pro' => '1.3.4', 'multi_inventory' => '1.5.0', 'product_levels' => '1.6.0', 'purchase_orders' => '0.0.1', 'stock_takes' => '0.0.1', 'pick_pack' => '0.0.1'); private $NXdyW = array('action_logs' => '1.3.5', 'export_pro' => '1.5.5', 'multi_inventory' => '1.8.0', 'product_levels' => '1.8.7.1', 'purchase_orders' => '1.1.1', 'stock_takes' => '1.0.0', 'pick_pack' => '1.0.0'); private static $A7Z_8 = []; private static $wfjRU = []; private $qWnb2; public function __construct() { goto trDrb; M5dK6: if (empty($h7B1I)) { goto PZbUx; } goto zc34a; zc34a: foreach ($h7B1I as $bYDLG => $MIZys) { goto v07Oq; DbHdC: $this->NXdyW[$bYDLG] = $MIZys; goto K3wlR; K3wlR: tKY93: goto Ee4GN; Ee4GN: zFfix: goto dr9L0; v07Oq: if (!(!array_key_exists($bYDLG, $this->NXdyW) && version_compare($MIZys, '0.0', '>'))) { goto tKY93; } goto DbHdC; dr9L0: } goto uUEnT; trDrb: $this->qWnb2 = defined('ATUM_DEBUG') && TRUE === ATUM_DEBUG; goto w3rq6; uUEnT: gYM7B: goto MXxMf; bibbU: add_action('after_setup_theme', array($this, 'load_addons'), 99); goto S4e0k; S4e0k: $this->check_trials(); goto H0vR9; MXxMf: PZbUx: goto bibbU; w3rq6: $h7B1I = (array) apply_filters('atum/addons/loader/extra_addons', []); goto M5dK6; H0vR9: } public function load_addons() { goto lT6SF; kZaeE: if (empty($DEMR1)) { goto lYAMI; } goto m01g2; bYSD7: UNw9E: goto rmRhv; m01g2: wp_register_script('atum-trials-modal', ATUM_URL . 'assets/js/build/atum-trials-modal.js', ['jquery', 'sweetalert2'], ATUM_VERSION, TRUE); goto D4_Lg; wjqsd: lYAMI: goto R48TX; zHLIE: $KvxrC = Addons::get_addons_paths(); goto SxJZM; D4_Lg: wp_localize_script('atum-trials-modal', 'atumTrialsModal', array('cancel' => __('Cancel', ATUM_TEXT_DOMAIN), 'extend' => __('Yes, Extend it!', ATUM_TEXT_DOMAIN), 'nonce' => wp_create_nonce(ATUM_PREFIX . 'manage_license'), 'ok' => __('OK', ATUM_TEXT_DOMAIN), 'success' => __('Success!', ATUM_TEXT_DOMAIN), 'trialExtension' => __('Trial extension', ATUM_TEXT_DOMAIN), 'trialWillExtend' => __('You are going to extend this trial for 7 days more', ATUM_TEXT_DOMAIN))); goto ag5ah; AC7v6: Addons::set_installed_addons($Fx64_); goto bYSD7; SxJZM: foreach ($Fx64_ as $QLGyR => $E_06A) { goto cC1SY; f2Jp2: self::$wfjRU[] = $QLGyR; goto t7Sli; H_r13: kZmkf: goto b6U0X; hNK3w: goto YKMVS; goto cwM28; yHHHx: x2KaO: goto Ujy4Y; POFCw: VQfAA: goto QCs10; vATf1: $dm6CC = sprintf(__('The ATUM %1$s add-on requires at least version %2$s to work with the current ATUM version. Please, update it.', ATUM_TEXT_DOMAIN), $E_06A['name'], $this->NXdyW[$G_4ed]); goto lJX6n; fix1m: if (!(!empty($E_06A['bootstrap']) && is_callable($E_06A['bootstrap']))) { goto pWg1t; } goto QFkDe; ESMzR: DijfV: goto wzxL_; voQfc: if (!(isset($Fx64_[$G_4ed]) || !$this->qWnb2 && !empty($KvxrC[$G_4ed]['basename']) && file_exists(WP_PLUGIN_DIR . '/' . $KvxrC[$G_4ed]['basename']))) { goto E8cd2; } goto KB6zv; AUl2b: if ('now' === $DEMR1[$QLGyR]['expires']) { goto gm0ZT; } goto c1HJf; FueYN: AtumAdminNotices::add_notice($dm6CC . ' ' . sprintf(__('Click %1$shere%2$s to purchase the full version.', ATUM_TEXT_DOMAIN), '<a href="' . $E_06A['addon_url'] . '" target="_blank">', '</a>'), strtolower($E_06A['name']), 'error', FALSE, TRUE); goto r1Bgu; A_1ha: if (!$Eocmp) { goto NB__X; } goto voQfc; g3diM: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto nzjLl; CO2ug: YNaLw: goto etRZ4; Y2Rdo: ymdPn: goto A_1ha; yEWP9: self::$wfjRU[] = $QLGyR; goto pubJf; jn3w6: self::$wfjRU[] = $QLGyR; goto SijB2; tjM80: goto kZmkf; goto Vb2OV; gdjhW: $DEMR1[$QLGyR]['key'] = $sFjac[$XlQ2K]['key']; goto PGD0M; g_PAj: if (!(empty($sFjac) || empty($sFjac[$XlQ2K]) || empty($sFjac[$XlQ2K]['key']))) { goto VQfAA; } goto GH_FM; etRZ4: if (!version_compare($this->NXdyW[$G_4ed], $E_06A['version'], '>')) { goto ymdPn; } goto vATf1; DDT6t: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto TEP1m; QFkDe: self::$A7Z_8[] = $QLGyR; goto yJ9Da; t7Sli: goto kZmkf; goto yHHHx; Nf4Or: goto kZmkf; goto POFCw; VwPOl: $dm6CC = sprintf(__('Your ATUM %1$s has expired and it has been disabled.', ATUM_TEXT_DOMAIN), $E_06A['name']); goto KL3Ez; SijB2: goto kZmkf; goto CO2ug; BJKQ0: $XlQ2K = strtolower($KvxrC[$G_4ed]['name'] ?? ''); goto g_PAj; yJ9Da: $aX1YH = call_user_func($E_06A['bootstrap']); goto LZZwg; GH_FM: $dm6CC = sprintf(__('The ATUM %1$s could not be loaded because its license is missing. Please, activate your trial from the %2$sadd-ons%3$s page.', ATUM_TEXT_DOMAIN), $E_06A['name'], '<a href="' . add_query_arg('page', 'atum-addons', admin_url('admin.php')) . '">', '</a>'); goto FLyfO; m7Zfi: $DEMR1[$QLGyR]['expires'] = $sFjac[$XlQ2K]['expires'] ?? 'now'; goto gdjhW; wfMoU: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto zxkWS; qdCy3: $G_4ed = $Eocmp ? str_replace('_trial', '', $QLGyR) : $QLGyR; goto n17km; d_VwE: AtumAdminNotices::add_notice($dm6CC, strtolower($E_06A['name']), 'error', FALSE, TRUE); goto wfMoU; cwM28: gm0ZT: goto VwPOl; DiNWs: AtumAdminNotices::add_notice($dm6CC, strtolower($E_06A['name']), 'error', FALSE, TRUE); goto EJchK; nzjLl: array_pop(self::$A7Z_8); goto oD565; zxkWS: self::$wfjRU[] = $QLGyR; goto tjM80; EJchK: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto jn3w6; zha6V: $DEMR1[$QLGyR] = $E_06A; goto m7Zfi; DHivo: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto yEWP9; wzxL_: pWg1t: goto H_r13; r1Bgu: $Fx64_[$QLGyR]['bootstrap'] = NULL; goto f2Jp2; KB6zv: $dm6CC = sprintf(__('The ATUM %s could not be loaded because the full version is installed. To use the trial, uninstall the full version first.', ATUM_TEXT_DOMAIN), $E_06A['name']); goto d_VwE; PGD0M: $DEMR1[$QLGyR]['extended'] = $sFjac[$XlQ2K]['extended'] ?? FALSE; goto AUl2b; FLyfO: AtumAdminNotices::add_notice($dm6CC, strtolower($E_06A['name']), 'error', FALSE, TRUE); goto DDT6t; KL3Ez: YKMVS: goto FueYN; Vb2OV: E8cd2: goto BJKQ0; lJX6n: AtumAdminNotices::add_notice($dm6CC, strtolower($E_06A['name']), 'error', FALSE, TRUE); goto DHivo; TEP1m: self::$wfjRU[] = $QLGyR; goto Nf4Or; LZZwg: if (!(!$aX1YH && !empty($this->beqvv[$QLGyR]) && version_compare($this->beqvv[$QLGyR], $E_06A['version'], '<'))) { goto DijfV; } goto g3diM; P6AmB: $dm6CC = sprintf(__('The ATUM %s add-on could not be loaded because is not a known add-on.', ATUM_TEXT_DOMAIN), $E_06A['name']); goto DiNWs; oD565: self::$wfjRU[] = $QLGyR; goto ESMzR; c1HJf: $dm6CC = sprintf(__('Your ATUM %1$s has expired on %2$s, and it has been disabled.', ATUM_TEXT_DOMAIN), $E_06A['name'], date_i18n(get_option('date_format'), strtotime($sFjac[$XlQ2K]['expires']))); goto hNK3w; Ujy4Y: NB__X: goto fix1m; pubJf: goto kZmkf; goto Y2Rdo; QCs10: if (!(empty($sFjac[$XlQ2K]['expires']) || strtotime($sFjac[$XlQ2K]['expires']) <= time())) { goto x2KaO; } goto zha6V; n17km: if (isset($this->NXdyW[$G_4ed])) { goto YNaLw; } goto P6AmB; cC1SY: $Eocmp = strpos($QLGyR, '_trial') !== FALSE || strpos($E_06A['basename'], 'trial') !== FALSE; goto qdCy3; b6U0X: } goto pflSc; ag5ah: $hFDnV = AtumAdminModal::get_instance([ATUM_SHORT_NAME . '-addons']); goto LS3JB; wr7yQ: $DEMR1 = []; goto WYaoC; SYJ51: $hFDnV->add_modal('trial-expired', array('icon' => 'warning', 'title' => _n('ATUM trial license expired!', 'ATUM trial licenses expired!', count($DEMR1), ATUM_TEXT_DOMAIN), 'showCancelButton' => FALSE, 'showConfirmButton' => FALSE, 'customClass' => ['container' => 'atum-trial-modal'], 'footer' => sprintf(__('Why are these add-ons expired and blocked? %1$sREAD INFO%2$s', ATUM_TEXT_DOMAIN), '&nbsp;<a href="https://stockmanagementlabs.crunch.help/en/atum-core/atum-trials" target="_blank">', '</a>')), Helpers::load_view_to_string('add-ons/expired-trials-modal', ['expired_trials' => $DEMR1])); goto wjqsd; WYaoC: $sFjac = Addons::get_keys(); goto zHLIE; rmRhv: NWYrR: goto KjMYg; R48TX: if (!(count(self::$wfjRU) > 0)) { goto UNw9E; } goto AC7v6; pflSc: TW0nS: goto kZaeE; lT6SF: $Fx64_ = Addons::get_installed_addons(); goto qiREN; qiREN: if (empty($Fx64_)) { goto NWYrR; } goto wr7yQ; LS3JB: $hFDnV->set_js_dependencies(['atum-trials-modal']); goto SYJ51; KjMYg: } public function check_trials() { add_filter('atum/queues/recurring_hooks', function ($g053i) { $g053i['atum/check_trials'] = array('time' => 'now', 'interval' => DAY_IN_SECONDS); return $g053i; }); add_action('atum/check_trials', function () { goto ueMju; ueMju: $evPVW = Addons::get_keys(); goto s2VI0; s2VI0: foreach ($evPVW as $Y8kWZ => $Iy7TC) { goto cApTV; FbL1I: $q1558['extended'] = TRUE; goto IJj2U; mmB1U: $q1558['key'] = $Iy7TC['key']; goto VLZGb; tSdJt: if (!(empty($Iy7TC['expires']) || $Iy7TC['expires'] !== $KxgNF->M2N_L)) { goto TXX5w; } goto Jmmxz; oha0Q: ZXtd0: goto upteW; Ve3bv: $KxgNF = json_decode(wp_remote_retrieve_body($i2BOk)); goto BDrxw; GWxbe: jelgo: goto USWT2; DF8aS: if (!(!is_wp_error($i2BOk) && isset($Iy7TC['status']) && 'valid' === $Iy7TC['status'])) { goto Po7Fu; } goto Ve3bv; C4XrJ: if (empty($q1558)) { goto jelgo; } goto mmB1U; wqJG6: nPc0O: goto C4XrJ; VLZGb: Addons::update_key($Y8kWZ, $q1558); goto GWxbe; XBuDR: $q1558['status'] = $KxgNF->nOCRn; goto iMjmQ; eKQBi: if (!(empty($Iy7TC['extended']) && (!isset($KxgNF->wyHK2) || TRUE !== $KxgNF->wyHK2))) { goto w3sQS; } goto FbL1I; IIQjB: if (!($Iy7TC['status'] !== $KxgNF->nOCRn)) { goto njNbe; } goto XBuDR; BDrxw: $q1558 = []; goto Y7rwD; Jmmxz: $q1558['expires'] = $KxgNF->M2N_L; goto LLLTO; IJj2U: w3sQS: goto wqJG6; upteW: vLPj5: goto nTusR; iMjmQ: njNbe: goto tSdJt; USWT2: Po7Fu: goto oha0Q; AUMcp: $i2BOk = Addons::check_license($Y8kWZ, $Iy7TC['key']); goto DF8aS; LLLTO: TXX5w: goto eKQBi; Y7rwD: if (!$KxgNF) { goto nPc0O; } goto IIQjB; cApTV: if (!(!empty($Iy7TC['trial']) && TRUE === $Iy7TC['trial'])) { goto ZXtd0; } goto AUMcp; nTusR: } goto SHLHK; SHLHK: GUUWT: goto sJCo2; sJCo2: }); } public static function get_bootstrapped_addons() { return self::$A7Z_8; } public static function get_non_bootstrapped_addons() { return self::$wfjRU; } }