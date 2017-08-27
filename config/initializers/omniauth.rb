Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '1833474020296018', '0425874b4fc53607fcacea0b62f41f2c'
  # provider :facebook, ENV['FACEBOOK_KEY'], ENV['FACEBOOK_SECRET']
end
