class EventsController < ApplicationController
  def index
    render inertia: "Show", props: {}
  end
end
