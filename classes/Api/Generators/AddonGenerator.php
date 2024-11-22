<?php
/**
 * Addon generator for SQLite
 *
 * @since       1.9.44
 * @author      BE REBEL - https://berebel.studio
 * @copyright   ©2024 BE REBEL Studio
 *
 * @package     Atum\Api\Generators
 */

namespace Atum\Api\Generators;

defined( 'ABSPATH' ) || exit;

class AddonGenerator extends GeneratorBase {

	/**
	 * The schema name
	 *
	 * @var string
	 */
	protected string $schema_name = 'addon';

	/**
	 * Prepare addon data according to schema
	 *
	 * @since 1.9.44
	 *
	 * @param array $addon Raw addon data
	 *
	 * @return array Prepared addon data
	 */
	protected function prepare_data( array $addon ): array {

		return [
			'_id'              => 'addon:' . $this->generate_uuid(),
			'_rev'             => '1-' . $this->generate_revision_id(),
			'_deleted'         => FALSE,
			'_meta'            => [
				'lwt' => $this->generate_timestamp(),
			],
			'_attachments'     => new \stdClass(),
			'itemType'         => 'addon',
			'slug'             => $addon['slug'],
			'plugin'           => $addon['plugin'],
			'name'             => $addon['name'],
			'version'          => $addon['version'],
			'versionLatest'    => $addon['version_latest'] ?? $addon['version'],
			'url'              => $addon['url'],
			'authorName'       => $addon['author_name'],
			'authorUrl'        => $addon['author_url'],
			'networkActivated' => (bool) ( $addon['network_activated'] ?? FALSE ),
			'active'           => (bool) ( $addon['active'] ?? FALSE ),
			'valid'            => (bool) ( $addon['valid'] ?? FALSE ),
			'image'            => $addon['image'] ?? '',
			'tags'             => $addon['tags'] ?? [],
			'versionRequired'  => $addon['version_required'] ?? '',
			'key'              => $addon['key'] ?? NULL,
			'deleted'          => FALSE,
			'status'           => $addon['status'] ?? 'inactive',
			'enabled'          => (bool) ( $addon['enabled'] ?? FALSE ),
		];
	}

}
