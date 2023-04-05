echo "Setting up repo"

cd apps/frontend
./setup.sh
cd ../../

cd apps/server
./setup.sh
cd ../../