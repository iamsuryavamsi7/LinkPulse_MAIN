package com.Client01.Controller.Secured.S3;

import com.Client01.Helper.MediaTypeResolver;
import com.Client01.Service.Secured.S3.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/files")
public class S3Controller {

    private final S3Service service;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam(value = "file")MultipartFile file) throws IOException {

        String message = service.uploadFile(file);

        return ResponseEntity.ok(message);

    }

    @GetMapping("/download/{fileName}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable("fileName") String fileName) {
        byte[] object = service.downloadFile(fileName);

        // Set the headers for the response
        return ResponseEntity.ok()
                .header("Content-Disposition", "attachment; filename=\"" + fileName + "\"")
                .contentLength(object.length)
                .body(object);
    }

    @GetMapping("/display/{fileName}")
    public ResponseEntity<byte[]> displayFile(@PathVariable("fileName") String fileName) {
        byte[] object = service.downloadFile(fileName); // Assuming this method fetches the byte data

        if (object == null || object.length == 0) {
            return ResponseEntity.notFound().build();
        }

        MediaType mediaType = MediaTypeResolver.resolveMediaType(fileName); // Use the helper method

        return ResponseEntity.ok()
                .contentType(mediaType)
                .body(object);
    }


}
