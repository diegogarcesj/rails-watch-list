class ReviewsController < ApplicationController
  before_action :set_list, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.list = @list
    if @review.save
      redirect_to list_path(@list)
    else
      render 'lists/show'
    end
  end

  private

  def review_params
    params.require(:review).permit(:comment, :rating)
  end

  def set_list
    @list = List.find(params[:list_id])
  end
end
