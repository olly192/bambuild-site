import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
    throw redirect(302, 'https://docs.google.com/forms/d/e/1FAIpQLScnuv-GqqC3iMxz17O048kIvm9uZWE-XgXm32qeNEEUBasnXQ/viewform?usp=sf_link');
}