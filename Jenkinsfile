pipeline {
    agent any

    environment {
        PROMETHEUS_CONTAINER_NAME = 'prometheus'
        PROMETHEUS_PORT = '9090'
        PROMETHEUS_CONFIG_PATH = '/home/linuxuser/prometheus.yml'  // Correct path
        PROMETHEUS_IMAGE = 'prom/prometheus'
    }

    stages {
        stage('Clean up Existing Prometheus Container') {
            steps {
                script {
                    // Clean up any existing Prometheus container with the same name
                    sh """
                    if [ \$(docker ps -q -f name=\$PROMETHEUS_CONTAINER_NAME) ]; then
                        docker stop \$PROMETHEUS_CONTAINER_NAME
                    fi
                    if [ \$(docker ps -a -q -f name=\$PROMETHEUS_CONTAINER_NAME) ]; then
                        docker rm \$PROMETHEUS_CONTAINER_NAME
                    fi
                    """
                }
            }
        }

        stage('Run Prometheus Container') {
            steps {
                script {
                    // Run the Prometheus container with the correct config path
                    sh """
                    docker run -d --name \$PROMETHEUS_CONTAINER_NAME \\
                        -p \$PROMETHEUS_PORT:\$PROMETHEUS_PORT \\
                        -v \$PROMETHEUS_CONFIG_PATH:/etc/prometheus/prometheus.yml \\
                        \$PROMETHEUS_IMAGE
                    """
                }
            }
        }
    }

    post {
        always {
            script {
                // Verify the status of the Prometheus container
                sh 'docker ps -f name=\$PROMETHEUS_CONTAINER_NAME'
            }
        }
    }
}
