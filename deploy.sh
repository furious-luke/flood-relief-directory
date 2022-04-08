#/bin/bash
set -e
aws s3 sync ./out s3://flood-relief-directory
aws cloudfront create-invalidation --distribution-id E1GRIVDJVAIRJ0 --paths "/*"
