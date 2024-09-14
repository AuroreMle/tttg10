pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clean up the workspace
                    sh 'git reset --hard'
                    sh 'git clean -fd'
                    
                    // Prune old, conflicting branches
                    sh 'git remote prune origin'
                    
                    // Checkout the main branch from the new repository
                    checkout([$class: 'GitSCM',
                              branches: [[name: '*/main']],
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [],
                              userRemoteConfigs: [[url: 'https://github.com/AuroreMle/tttg10', credentialsId: 'access-git']]
                    ])
                }
            }
        }

       

        stage('Pull Latest Changes') {
            steps {
                script {
                    // Pull the latest changes from the main branch
                    sh 'git pull origin main'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Check Docker and Docker Compose versions
                    sh 'docker --version'
                    sh 'docker-compose --version'
                    
                    // Build Docker images
                    sh 'docker-compose build --no-cache'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop and remove existing containers
                    sh 'docker-compose down'
                    
                    // Start Docker containers in detached mode
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }

    post {
        always {
            // Clean up and perform any necessary actions after the pipeline completes
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
