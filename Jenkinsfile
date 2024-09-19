pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    sh 'git reset --hard'
                    sh 'git clean -fd'
                    sh 'git remote prune origin'
                    checkout([$class: 'GitSCM',
                              branches: [[name: '*/main']],
                              userRemoteConfigs: [[url: 'https://github.com/AuroreMle/tttg10', credentialsId: 'access-git']]
                    ])
                }
            }
        }

        stage('Pull Latest Changes') {
            steps {
                script {
                    sh 'git pull origin main'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'docker-compose build --no-cache'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }

    post {
        always {
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
