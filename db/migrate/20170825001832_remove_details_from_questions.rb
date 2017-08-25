class RemoveDetailsFromQuestions < ActiveRecord::Migration[5.0]
  def change
    remove_column :questions, :details
  end
end
