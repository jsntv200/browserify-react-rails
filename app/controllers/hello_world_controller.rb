class HelloWorldController < ApplicationController
  def index
    @data = { :name => 'Jason' }
  end
end
