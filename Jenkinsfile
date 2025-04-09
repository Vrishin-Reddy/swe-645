pipeline {
	agent any
	environment {
	DOCKERHUB_CREDENTIALS = credentials('09fd92cd-bf60-4748-81b6-27076c2a5f5d')
	BUILD_TIMESTAMP = "${new Date().format("yyyyMMdd-HHmmss")}"
	}
	
	stages {
		stage("Building the Student Survey Image") {
			steps{
				script {
					sh 'sudo docker build -t vrishin/student-survey-app:$BUILD_TIMESTAMP .'
				}
			}	
		}
		
		stage("Login to Docker Hub"){
			steps{
				script{
					sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'

				}
			}
		}
		stage("Pushing Image to DockerHub") {
			steps {
				script {
					sh 'sudo docker push vrishin/student-survey-app:$BUILD_TIMESTAMP'
					}
				}
			}
			
			
		stage("Deploying to Rancher") {
			steps {
				sh 'sudo kubectl set image deployment/reddysdep2 container-0=vrishin/student-survey-app:$BUILD_TIMESTAMP -n default'
				sh 'sudo kubectl rollout status deployment/reddysdep2 -n default'
			}
		}
		
		
	}
	
}
