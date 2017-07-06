Paperclip.options[:content_type_mappings] = {
  zip: 'application/zip'
}

Paperclip::Attachment.default_options[:validate_media_type] = false
