-- CreateTable
CREATE TABLE `signinWrap` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NULL,
    `sign_ip` VARCHAR(191) NULL,
    `sign_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `performance_pc` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(191) NULL,
    `disk` BIGINT NULL,
    `data_time` DATETIME(3) NULL,
    `network_frequency` DOUBLE NULL,
    `cpu_usage` DOUBLE NULL,
    `memory_usage` DOUBLE NULL,
    `disk_usage` DOUBLE NULL,
    `create_time` DATETIME(3) NULL,
    `update_time` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `info_protein` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `time` DATETIME(3) NULL,
    `mass_spectrometer` VARCHAR(191) NULL,
    `score` INTEGER NULL,
    `median_of_chromatographic_peak_width` DOUBLE NULL,
    `charge_1` INTEGER NULL,
    `charge_2` INTEGER NULL,
    `charge_3` INTEGER NULL,
    `charge_4` INTEGER NULL,
    `first_order_spectrogram` DOUBLE NULL,
    `first_order_spectrogram_by_log` DOUBLE NULL,
    `second_order_spectrogram` DOUBLE NULL,
    `second_order_spectrogram_by_log` DOUBLE NULL,
    `collect_num` INTEGER NULL,
    `collect_speed` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `info_sirt` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `time` DATETIME(3) NULL,
    `interior_label` VARCHAR(191) NULL,
    `Round` INTEGER NULL,
    `retention_time` BIGINT NULL,
    `strength` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
