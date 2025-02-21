pipeline {
    agent any

    stages {
        
        
        stage('git clone') {
            steps {
               git 'https://github.com/amirmamdouh123/deploy_node_app_jenkins.git'

            }
            
            success{
                echo "git repo cloned successfully "
            }
            // failure{
            //     echo "git repo failed "
            // }
        }
        
        stage('docker build Dockerfile and push to ECR repository') {
            steps {

                sh 'docker build -t 242201301329.dkr.ecr.us-east-1.amazonaws.com/node-app . '

                sh 'docker push 242201301329.dkr.ecr.us-east-1.amazonaws.com/node-app'
                
            }
            
            success{
                
                echo "docker image is built and pulled to ECR repo successfully "
            }
 
        }
        
        
        stage('docker build Dockerfile and push to ECR repository') {
            steps {

                sh 'docker build -t 242201301329.dkr.ecr.us-east-1.amazonaws.com/node-app . '

                sh 'docker push 242201301329.dkr.ecr.us-east-1.amazonaws.com/node-app'
                
            }
            
            success {
                echo "docker image is built and pulled to ECR repo successfully "
            }
 
        }
        
        stage('deploy to the kubernetes cluster') {
            
            steps {

                sh 'kubectl apply -f nodejs-app-deployment.yml '
                
                sh 'kubectl apply -f nodejs_clusterIP.yml '
                
                sh 'kubectl apply -f ingress.yml '

            }
            
            success {
                echo "the application is deployed successfully "
            }
 
        }
        
        
        
        
        
        
        
        
        
        
        
    }
}

