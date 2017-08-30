class AddAccessTokenToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fb_access_token, :string
    add_column :users, :fb_refresh_token, :string
    add_column :users, :fb_uid, :string
  end
end
