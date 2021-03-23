export { default as Header } from '../../components/Header.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as UserCard } from '../../components/UserCard.vue'
export { default as Logo } from '../../components/header/Logo.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header'}" */).then(c => c.default || c)
export const LazyModal = import('../../components/Modal.vue' /* webpackChunkName: "components/Modal'}" */).then(c => c.default || c)
export const LazyUserCard = import('../../components/UserCard.vue' /* webpackChunkName: "components/UserCard'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/header/Logo.vue' /* webpackChunkName: "components/header/Logo'}" */).then(c => c.default || c)
