import Route from '@ember/routing/route';
import Analytics from 'ember-osf/mixins/analytics';
import ResetScrollMixin from '../mixins/reset-scroll';

/**
 * @module ember-preprints
 * @submodule routes
 */

/**
 * @class Page Not Found Route Handler
 */
export default Route.extend(Analytics, ResetScrollMixin, {
});
