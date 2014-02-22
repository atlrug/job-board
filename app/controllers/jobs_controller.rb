class JobsController < ApplicationController
  respond_to :json

  def index
    respond_with Job.all
  end
end
