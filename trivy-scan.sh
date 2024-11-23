# Check if the image name is provided
if ($args.Length -eq 0) {
    Write-Host "Error: No Docker image specified"
    exit 1
}

$Image = $args[0]

# Run the Trivy scan on the provided image
Write-Host "Scanning image: $Image"
trivy image --no-progress --exit-code 1 $Image
