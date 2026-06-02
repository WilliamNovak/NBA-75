# Criação do bucket S3
resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name

  tags = {
    Name        = "NBA Players Site"
    Environment = "dev"
  }
}

# Configuração de site estático
resource "aws_s3_bucket_website_configuration" "site_config" {
  bucket = aws_s3_bucket.site.id

  index_document {
    suffix = "index.html"
  }
}

# Liberação de acesso público
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.site.id

  block_public_acls   = false
  block_public_policy = false
  ignore_public_acls  = false
  restrict_public_buckets = false
}

# Policy pública
resource "aws_s3_bucket_policy" "public_policy" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = "*"
        Action = ["s3:GetObject"]
        Resource = "${aws_s3_bucket.site.arn}/*"
      }
    ]
  })
}