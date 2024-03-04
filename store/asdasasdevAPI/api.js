import axios from "axios"
const asdasasdevAPI = axios.create({
  baseURL: "https://asdasas-dev-133712.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return asdasasdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_hobby_list(payload) {
  return asdasasdevAPI.get(`/api/v1/hobby/`)
}
function api_v1_hobby_create(payload) {
  return asdasasdevAPI.post(`/api/v1/hobby/`, payload)
}
function api_v1_hobby_retrieve(payload) {
  return asdasasdevAPI.get(`/api/v1/hobby/${payload.id}/`)
}
function api_v1_hobby_update(payload) {
  return asdasasdevAPI.put(`/api/v1/hobby/${payload.id}/`, payload)
}
function api_v1_hobby_partial_update(payload) {
  return asdasasdevAPI.patch(`/api/v1/hobby/${payload.id}/`, payload)
}
function api_v1_hobby_destroy(payload) {
  return asdasasdevAPI.delete(`/api/v1/hobby/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return asdasasdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return asdasasdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return asdasasdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return asdasasdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return asdasasdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return asdasasdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_hobby_list,
  api_v1_hobby_create,
  api_v1_hobby_retrieve,
  api_v1_hobby_update,
  api_v1_hobby_partial_update,
  api_v1_hobby_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
