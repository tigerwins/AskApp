class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.text :details
      t.integer :asker_id, null: false

      t.timestamps
    end

    add_index :questions, :asker_id
  end
end
