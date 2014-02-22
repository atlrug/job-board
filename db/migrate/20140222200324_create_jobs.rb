class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs, id: :uuid do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
