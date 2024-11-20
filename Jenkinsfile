def customImage

pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Skip Tests') {
            steps {
                sh 'echo "skipping test"'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    customImage = docker.build("abammeke/budget-app:${BUILD_NUMBER}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHubCredentials') {
                        customImage.push('latest')
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                            def imageName = "abammeke/budget-app:${BUILD_NUMBER}"

                            sh "kubectl apply -f k8s/deployment.yaml"
                            sh """
                            if kubectl get svc budget-app-service; then
                                kubectl delete svc budget-app-service
                            fi
                            kubectl apply -f k8s/service.yaml
                            """
                }
            }
        }
    }
    post {
        cleanup {
            sh "docker rmi abammeke/budget-app:${BUILD_NUMBER}"
             sh "docker rmi registry.hub.docker.com/abammeke/budget-app"
        }
    }
}
