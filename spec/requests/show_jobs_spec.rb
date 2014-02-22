require 'spec_helper'

describe 'showing a list of jobs' do
  let!(:jobs) {
    [
      Job.create!(
        title: 'Back-End Developer at Runtastic',
        description: 'We are a rapidly growing health and fitness company. We maintain a suite of mobile and web apps, products and services that track and manage health and fitness data. With over 65 million app downloads, Runtastic is a recognized leader when it comes to mobile technology and fitness app development.'
      ),
      Job.create!(
        title: 'Senior Rails Developer at Techvox Inc.',
        description: 'TechVOX is a software company building products focussed on the Sign and Graphics Industry. Our flagship product signVOX is used in over 700 small and medium size Sign Businesses through out the world. Over the past 3 years we have built signVOX to be the number one cloud based platform for the Sign and Graphics industry. We are based in Palo Alto, California with offices in New Hampshire and India.'
      )
    ]
  }

  it 'returns a list of serialized jobs' do
    get '/jobs', { 'Accept' => 'application/json' }

    expect(response.body).to have_json_size(2).at_path('jobs')
  end
end
