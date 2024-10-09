import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'
import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function AboutUs() {
    return (
        <section className="relative overflow-hidden">
            <div className={`${poppins.className} relative bg-grad bg-[#F36A3E] mt-8 mb-8 h-72 flex items-center justify-center`}>
                <h1 className="text-[#ffffff] text-4xl sm:text-5xl font-bold text-center mb-2">
                    About HANIKO
                </h1>

                <div className="absolute">
                    <svg id="bg-header" width="1920" height="460" viewBox="0 0 1920 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask-bg-header" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="460">
                            <rect width="1920" height="460" fill="#C4C4C4"></rect>
                        </mask>
                        <g mask="url(#mask-bg-header)">
                            <path d="M1532.29 270L1543.67 276.571V289.714L1532.29 296.286L1520.9 289.714V276.571L1532.29 270Z" fill="#FFE6C5"></path>
                            <path d="M1571.71 294.095L1583.1 300.667V313.81L1571.71 320.381L1560.33 313.81V300.667L1571.71 294.095Z" fill="#FFE6C5"></path>
                            <path d="M1545.43 294.095L1556.81 300.667V313.81L1545.43 320.381L1534.05 313.81V300.667L1545.43 294.095Z" fill="#FFE6C5"></path>
                            <path d="M1558.57 270L1569.95 276.571V289.714L1558.57 296.286L1547.19 289.714V276.571L1558.57 270Z" fill="#FFE6C5"></path>
                            <path d="M1584.86 270L1596.24 276.571V289.714L1584.86 296.286L1573.48 289.714V276.571L1584.86 270Z" fill="#FFE6C5"></path>
                            <path d="M1519.14 294.095L1530.52 300.667V313.81L1519.14 320.381L1507.76 313.81V300.667L1519.14 294.095Z" fill="#FFE6C5"></path>
                            <mask id="mask1-bg-header" maskUnits="userSpaceOnUse" x="1724" y="75" width="76" height="75">
                                <rect x="1724" y="75" width="76" height="74.2727" fill="#C4C4C4"></rect>
                            </mask>
                            <g mask="url(#mask1-bg-header)">
                                <path d="M1791.35 145.749C1792.59 145.336 1793.71 144.084 1793.97 142.821C1794.48 140.389 1792.04 137.956 1789.61 138.464C1787.78 138.842 1786.37 140.707 1786.54 142.467C1786.67 143.707 1787.61 144.982 1788.79 145.56C1789.51 145.903 1790.62 145.985 1791.35 145.749Z" fill="#FFE6C5"></path>
                                <path d="M1776.23 145.749C1777.47 145.336 1778.6 144.084 1778.86 142.821C1779.36 140.389 1776.93 137.956 1774.5 138.464C1772.67 138.842 1771.25 140.707 1771.43 142.467C1771.56 143.707 1772.49 144.982 1773.67 145.56C1774.39 145.903 1775.5 145.985 1776.23 145.749Z" fill="#FFE6C5"></path>
                                <path d="M1761.12 145.749C1762.36 145.336 1763.48 144.084 1763.74 142.821C1764.25 140.389 1761.82 137.956 1759.38 138.464C1757.55 138.842 1756.14 140.707 1756.31 142.467C1756.44 143.707 1757.38 144.982 1758.56 145.56C1759.28 145.903 1760.39 145.985 1761.12 145.749Z" fill="#FFE6C5"></path>
                                <path d="M1746.01 145.749C1747.25 145.336 1748.37 144.084 1748.63 142.821C1748.92 141.44 1748.25 139.94 1746.95 139.054C1745.69 138.181 1744.25 138.169 1742.97 139.019C1740.88 140.412 1740.6 143.01 1742.35 144.746C1743.35 145.761 1744.79 146.151 1746.01 145.749Z" fill="#FFE6C5"></path>
                                <path d="M1730.89 145.749C1732.13 145.336 1733.26 144.084 1733.52 142.821C1733.81 141.44 1733.14 139.94 1731.84 139.054C1730.58 138.181 1729.13 138.169 1727.86 139.019C1725.77 140.412 1725.49 143.01 1727.23 144.746C1728.24 145.761 1729.68 146.151 1730.89 145.749Z" fill="#FFE6C5"></path>
                                <path d="M1791.35 130.636C1792.59 130.222 1793.71 128.971 1793.97 127.707C1794.48 125.275 1792.04 122.843 1789.61 123.35C1787.78 123.728 1786.37 125.594 1786.54 127.353C1786.67 128.593 1787.61 129.868 1788.79 130.447C1789.51 130.789 1790.62 130.872 1791.35 130.636Z" fill="#FFE6C5"></path>
                                <path d="M1776.23 130.636C1777.47 130.222 1778.6 128.971 1778.86 127.707C1779.36 125.275 1776.93 122.843 1774.5 123.35C1772.67 123.728 1771.25 125.594 1771.43 127.353C1771.56 128.593 1772.49 129.868 1773.67 130.447C1774.39 130.789 1775.5 130.872 1776.23 130.636Z" fill="#FFE6C5"></path>
                                <path d="M1761.12 130.636C1762.36 130.222 1763.48 128.971 1763.74 127.707C1764.25 125.275 1761.82 122.843 1759.38 123.35C1757.55 123.728 1756.14 125.594 1756.31 127.353C1756.44 128.593 1757.38 129.868 1758.56 130.447C1759.28 130.789 1760.39 130.872 1761.12 130.636Z" fill="#FFE6C5"></path>
                                <path d="M1746.01 130.636C1747.25 130.222 1748.37 128.971 1748.63 127.707C1748.92 126.326 1748.25 124.826 1746.95 123.941C1745.69 123.067 1744.25 123.055 1742.97 123.905C1740.88 125.299 1740.6 127.896 1742.35 129.632C1743.35 130.647 1744.79 131.037 1746.01 130.636Z" fill="#FFE6C5"></path>
                                <path d="M1730.89 130.636C1732.13 130.222 1733.26 128.971 1733.52 127.707C1733.81 126.326 1733.14 124.826 1731.84 123.941C1730.58 123.067 1729.13 123.055 1727.86 123.905C1725.77 125.299 1725.49 127.896 1727.23 129.632C1728.24 130.647 1729.68 131.037 1730.89 130.636Z" fill="#FFE6C5"></path>
                                <path d="M1791.35 115.522C1792.59 115.109 1793.71 113.857 1793.97 112.594C1794.48 110.161 1792.04 107.729 1789.61 108.237C1787.78 108.615 1786.37 110.48 1786.54 112.239C1786.67 113.479 1787.61 114.754 1788.79 115.333C1789.51 115.675 1790.62 115.758 1791.35 115.522Z" fill="#FFE6C5"></path>
                                <path d="M1776.23 115.522C1777.47 115.109 1778.6 113.857 1778.86 112.594C1779.36 110.161 1776.93 107.729 1774.5 108.237C1772.67 108.615 1771.25 110.48 1771.43 112.239C1771.56 113.479 1772.49 114.754 1773.67 115.333C1774.39 115.675 1775.5 115.758 1776.23 115.522Z" fill="#FFE6C5"></path>
                                <path d="M1761.12 115.522C1762.36 115.109 1763.48 113.857 1763.74 112.594C1764.25 110.161 1761.82 107.729 1759.38 108.237C1757.55 108.615 1756.14 110.48 1756.31 112.239C1756.44 113.479 1757.38 114.754 1758.56 115.333C1759.28 115.675 1760.39 115.758 1761.12 115.522Z" fill="#FFE6C5"></path>
                                <path d="M1746.01 115.522C1747.25 115.109 1748.37 113.857 1748.63 112.594C1749.14 110.161 1746.7 107.729 1744.27 108.237C1742.44 108.615 1741.02 110.48 1741.2 112.239C1741.33 113.479 1742.26 114.754 1743.45 115.333C1744.17 115.675 1745.28 115.758 1746.01 115.522Z" fill="#FFE6C5"></path>
                                <path d="M1730.89 115.522C1732.13 115.109 1733.26 113.857 1733.52 112.594C1734.02 110.161 1731.59 107.729 1729.16 108.237C1727.33 108.615 1725.91 110.48 1726.09 112.239C1726.22 113.479 1727.15 114.754 1728.33 115.333C1729.05 115.675 1730.16 115.758 1730.89 115.522Z" fill="#FFE6C5"></path>
                                <path d="M1791.35 100.408C1792.59 99.9952 1793.71 98.7436 1793.97 97.4802C1794.48 95.0478 1792.04 92.6155 1789.61 93.1232C1787.78 93.501 1786.37 95.3666 1786.54 97.126C1786.67 98.3658 1787.61 99.641 1788.79 100.22C1789.51 100.562 1790.62 100.645 1791.35 100.408Z" fill="#FFE6C5"></path>
                                <path d="M1776.23 100.408C1777.47 99.9952 1778.6 98.7436 1778.86 97.4802C1779.36 95.0478 1776.93 92.6155 1774.5 93.1232C1772.67 93.501 1771.25 95.3666 1771.43 97.126C1771.56 98.3658 1772.49 99.641 1773.67 100.22C1774.39 100.562 1775.5 100.645 1776.23 100.408Z" fill="#FFE6C5"></path>
                                <path d="M1761.12 100.408C1762.36 99.9952 1763.48 98.7436 1763.74 97.4802C1764.25 95.0478 1761.82 92.6155 1759.38 93.1232C1757.55 93.501 1756.14 95.3666 1756.31 97.126C1756.44 98.3658 1757.38 99.641 1758.56 100.22C1759.28 100.562 1760.39 100.645 1761.12 100.408Z" fill="#FFE6C5"></path>
                                <path d="M1746.01 100.408C1747.25 99.9952 1748.37 98.7436 1748.63 97.4802C1749.14 95.0478 1746.7 92.6155 1744.27 93.1232C1742.44 93.501 1741.02 95.3666 1741.2 97.126C1741.33 98.3658 1742.26 99.641 1743.45 100.22C1744.17 100.562 1745.28 100.645 1746.01 100.408Z" fill="#FFE6C5"></path>
                                <path d="M1730.89 100.408C1732.13 99.9952 1733.26 98.7436 1733.52 97.4802C1734.02 95.0478 1731.59 92.6155 1729.16 93.1232C1727.33 93.501 1725.91 95.3666 1726.09 97.126C1726.22 98.3658 1727.15 99.641 1728.33 100.22C1729.05 100.562 1730.16 100.645 1730.89 100.408Z" fill="#FFE6C5"></path>
                                <path d="M1791.35 85.2949C1792.59 84.8817 1793.71 83.6301 1793.97 82.3667C1794.48 79.9343 1792.04 77.502 1789.61 78.0097C1787.78 78.3875 1786.37 80.2531 1786.54 82.0124C1786.67 83.2522 1787.61 84.5274 1788.79 85.106C1789.51 85.4484 1790.62 85.5311 1791.35 85.2949Z" fill="#FFE6C5"></path>
                                <path d="M1776.23 85.2949C1777.47 84.8817 1778.6 83.6301 1778.86 82.3667C1779.36 79.9343 1776.93 77.502 1774.5 78.0097C1772.67 78.3875 1771.25 80.2531 1771.43 82.0124C1771.56 83.2522 1772.49 84.5274 1773.67 85.106C1774.39 85.4484 1775.5 85.5311 1776.23 85.2949Z" fill="#FFE6C5"></path>
                                <path d="M1761.12 85.2949C1762.36 84.8817 1763.48 83.6301 1763.74 82.3667C1764.25 79.9343 1761.82 77.502 1759.38 78.0097C1757.55 78.3875 1756.14 80.2531 1756.31 82.0124C1756.44 83.2522 1757.38 84.5274 1758.56 85.106C1759.28 85.4484 1760.39 85.5311 1761.12 85.2949Z" fill="#FFE6C5"></path>
                                <path d="M1746.01 85.2949C1747.25 84.8817 1748.37 83.6301 1748.63 82.3667C1749.14 79.9343 1746.7 77.502 1744.27 78.0097C1742.44 78.3875 1741.02 80.2531 1741.2 82.0124C1741.33 83.2522 1742.26 84.5274 1743.45 85.106C1744.17 85.4484 1745.28 85.5311 1746.01 85.2949Z" fill="#FFE6C5"></path>
                                <path d="M1730.89 85.2949C1732.13 84.8817 1733.26 83.6301 1733.52 82.3667C1734.02 79.9343 1731.59 77.502 1729.16 78.0097C1727.33 78.3875 1725.91 80.2531 1726.09 82.0124C1726.22 83.2522 1727.15 84.5274 1728.33 85.106C1729.05 85.4484 1730.16 85.5311 1730.89 85.2949Z" fill="#FFE6C5"></path>
                            </g>
                            <mask id="mask2-bg-header" maskUnits="userSpaceOnUse" x="385" y="86" width="84" height="82">
                                <rect x="385" y="86" width="84" height="81.2609" fill="#C4C4C4"></rect>
                            </mask>
                            <g mask="url(#mask2-bg-header)">
                                <path d="M458.939 162.166C460.25 161.729 461.436 160.406 461.711 159.07C462.247 156.499 459.676 153.927 457.104 154.464C455.169 154.863 453.671 156.836 453.859 158.696C453.996 160.006 454.982 161.355 456.231 161.966C456.992 162.328 458.165 162.416 458.939 162.166Z" fill="#FFE6C5"></path>
                                <path d="M442.961 162.166C444.846 161.542 446.119 159.469 445.732 157.647C445.42 156.161 444.035 154.776 442.562 154.464C440.14 153.952 437.631 156.236 437.881 158.696C438.018 160.006 439.004 161.354 440.252 161.966C441.014 162.328 442.187 162.415 442.961 162.166Z" fill="#FFE6C5"></path>
                                <path d="M426.983 162.166C428.294 161.729 429.48 160.406 429.755 159.07C430.291 156.499 427.72 153.927 425.148 154.464C423.213 154.863 421.715 156.836 421.903 158.696C422.04 160.006 423.026 161.355 424.274 161.966C425.036 162.328 426.209 162.416 426.983 162.166Z" fill="#FFE6C5"></path>
                                <path d="M411.005 162.166C412.315 161.729 413.501 160.406 413.776 159.07C414.313 156.499 411.741 153.927 409.17 154.464C407.235 154.863 405.737 156.836 405.924 158.696C406.061 160.006 407.048 161.355 408.296 161.966C409.057 162.328 410.231 162.416 411.005 162.166Z" fill="#FFE6C5"></path>
                                <path d="M395.026 162.166C396.337 161.729 397.523 160.406 397.797 159.07C398.334 156.499 395.763 153.927 393.191 154.464C391.256 154.863 389.758 156.836 389.946 158.696C390.083 160.006 391.069 161.355 392.317 161.966C393.079 162.328 394.252 162.416 395.026 162.166Z" fill="#FFE6C5"></path>
                                <path d="M458.939 146.188C460.25 145.751 461.436 144.427 461.711 143.092C462.247 140.52 459.676 137.949 457.104 138.485C455.169 138.885 453.671 140.857 453.859 142.717C453.996 144.028 454.982 145.376 456.231 145.988C456.992 146.35 458.165 146.437 458.939 146.188Z" fill="#FFE6C5"></path>
                                <path d="M442.961 146.188C444.846 145.564 446.119 143.491 445.732 141.669C445.42 140.183 444.035 138.798 442.562 138.486C440.14 137.974 437.631 140.258 437.881 142.717C438.018 144.028 439.004 145.376 440.252 145.988C441.014 146.35 442.187 146.437 442.961 146.188Z" fill="#FFE6C5"></path>
                                <path d="M426.983 146.188C428.294 145.751 429.48 144.427 429.755 143.092C430.291 140.52 427.72 137.949 425.148 138.485C423.213 138.885 421.715 140.857 421.903 142.717C422.04 144.028 423.026 145.376 424.274 145.988C425.036 146.35 426.209 146.437 426.983 146.188Z" fill="#FFE6C5"></path>
                                <path d="M411.005 146.188C412.315 145.751 413.501 144.427 413.776 143.092C414.313 140.52 411.741 137.949 409.17 138.485C407.235 138.885 405.737 140.857 405.924 142.717C406.061 144.028 407.048 145.376 408.296 145.988C409.057 146.35 410.231 146.437 411.005 146.188Z" fill="#FFE6C5"></path>
                                <path d="M395.026 146.188C396.337 145.751 397.523 144.427 397.797 143.092C398.334 140.52 395.763 137.949 393.191 138.485C391.256 138.885 389.758 140.857 389.946 142.717C390.083 144.028 391.069 145.376 392.317 145.988C393.079 146.35 394.252 146.437 395.026 146.188Z" fill="#FFE6C5"></path>
                                <path d="M458.939 130.209C460.25 129.773 461.436 128.449 461.711 127.114C462.247 124.542 459.676 121.971 457.104 122.507C455.169 122.907 453.671 124.879 453.859 126.739C453.996 128.05 454.982 129.398 456.231 130.01C456.992 130.372 458.165 130.459 458.939 130.209Z" fill="#FFE6C5"></path>
                                <path d="M442.961 130.209C444.272 129.773 445.457 128.449 445.732 127.114C446.269 124.542 443.697 121.971 441.126 122.507C439.191 122.907 437.693 124.879 437.88 126.739C438.018 128.05 439.004 129.398 440.252 130.01C441.013 130.372 442.187 130.459 442.961 130.209Z" fill="#FFE6C5"></path>
                                <path d="M426.983 130.209C428.294 129.773 429.48 128.449 429.755 127.114C430.291 124.542 427.72 121.971 425.148 122.507C423.213 122.907 421.715 124.879 421.903 126.739C422.04 128.05 423.026 129.398 424.274 130.01C425.036 130.372 426.209 130.459 426.983 130.209Z" fill="#FFE6C5"></path>
                                <path d="M411.005 130.209C412.315 129.773 413.501 128.449 413.776 127.114C414.313 124.542 411.741 121.971 409.17 122.507C407.235 122.907 405.737 124.879 405.924 126.739C406.061 128.05 407.048 129.398 408.296 130.01C409.057 130.372 410.231 130.459 411.005 130.209Z" fill="#FFE6C5"></path>
                                <path d="M395.026 130.209C396.337 129.773 397.523 128.449 397.797 127.114C398.334 124.542 395.763 121.971 393.191 122.507C391.256 122.907 389.758 124.879 389.946 126.739C390.083 128.05 391.069 129.398 392.317 130.01C393.079 130.372 394.252 130.459 395.026 130.209Z" fill="#FFE6C5"></path>
                                <path d="M458.939 114.231C460.25 113.794 461.436 112.471 461.711 111.135C462.247 108.564 459.676 105.992 457.104 106.529C455.169 106.929 453.671 108.901 453.859 110.761C453.996 112.072 454.982 113.42 456.231 114.031C456.992 114.394 458.165 114.481 458.939 114.231Z" fill="#FFE6C5"></path>
                                <path d="M442.961 114.231C444.272 113.794 445.457 112.471 445.732 111.135C446.269 108.564 443.697 105.992 441.126 106.529C439.191 106.929 437.693 108.901 437.88 110.761C438.018 112.072 439.004 113.42 440.252 114.031C441.013 114.394 442.187 114.481 442.961 114.231Z" fill="#FFE6C5"></path>
                                <path d="M426.983 114.231C428.294 113.794 429.48 112.471 429.755 111.135C430.291 108.564 427.72 105.992 425.148 106.529C423.213 106.929 421.715 108.901 421.903 110.761C422.04 112.072 423.026 113.42 424.274 114.031C425.036 114.394 426.209 114.481 426.983 114.231Z" fill="#FFE6C5"></path>
                                <path d="M411.005 114.231C412.315 113.794 413.501 112.471 413.776 111.135C414.313 108.564 411.741 105.992 409.17 106.529C407.235 106.929 405.737 108.901 405.924 110.761C406.061 112.072 407.048 113.42 408.296 114.031C409.057 114.394 410.231 114.481 411.005 114.231Z" fill="#FFE6C5"></path>
                                <path d="M395.026 114.231C396.337 113.794 397.523 112.471 397.797 111.135C398.334 108.564 395.763 105.992 393.191 106.529C391.256 106.929 389.758 108.901 389.946 110.761C390.083 112.072 391.069 113.42 392.317 114.031C393.079 114.394 394.252 114.481 395.026 114.231Z" fill="#FFE6C5"></path>
                                <path d="M458.939 98.2529C460.25 97.816 461.436 96.4928 461.711 95.1572C462.247 92.5856 459.676 90.0141 457.104 90.5509C455.169 90.9504 453.671 92.9227 453.859 94.7827C453.996 96.0934 454.982 97.4415 456.231 98.0532C456.992 98.4152 458.165 98.5026 458.939 98.2529Z" fill="#FFE6C5"></path>
                                <path d="M442.961 98.2529C444.272 97.816 445.457 96.4928 445.732 95.1572C446.269 92.5856 443.697 90.0141 441.126 90.5509C439.191 90.9504 437.693 92.9227 437.88 94.7827C438.018 96.0934 439.004 97.4415 440.252 98.0532C441.013 98.4152 442.187 98.5026 442.961 98.2529Z" fill="#FFE6C5"></path>
                                <path d="M426.983 98.2529C428.294 97.816 429.48 96.4928 429.755 95.1572C430.291 92.5856 427.72 90.0141 425.148 90.5509C423.213 90.9504 421.715 92.9227 421.903 94.7827C422.04 96.0934 423.026 97.4415 424.274 98.0532C425.036 98.4152 426.209 98.5026 426.983 98.2529Z" fill="#FFE6C5"></path>
                                <path d="M411.005 98.2529C412.315 97.816 413.501 96.4928 413.776 95.1572C414.313 92.5856 411.741 90.0141 409.17 90.5509C407.235 90.9504 405.737 92.9227 405.924 94.7827C406.061 96.0934 407.048 97.4415 408.296 98.0532C409.057 98.4152 410.231 98.5026 411.005 98.2529Z" fill="#FFE6C5"></path>
                                <path d="M395.026 98.2529C396.337 97.816 397.523 96.4928 397.797 95.1572C398.334 92.5856 395.763 90.0141 393.191 90.5509C391.256 90.9504 389.758 92.9227 389.946 94.7827C390.083 96.0934 391.069 97.4415 392.317 98.0532C393.079 98.4152 394.252 98.5026 395.026 98.2529Z" fill="#FFE6C5"></path>
                            </g>
                            <path d="M583.989 266.094L613.316 261.139L602.943 289.014L583.989 266.094Z" fill="#FFDFB2"></path>
                            <path d="M1309.07 111.552L1329.29 89.7346L1338.07 118.149L1309.07 111.552Z" fill="#FFDFB2"></path>
                            <path d="M130 240C116.2 240 105 251.2 105 265C105 278.8 116.2 290 130 290C143.8 290 155 278.8 155 265C155 251.2 143.8 240 130 240ZM130 280C121.7 280 115 273.3 115 265C115 256.7 121.7 250 130 250C138.3 250 145 256.7 145 265C145 273.3 138.3 280 130 280Z" fill="#FFDFB2"></path>
                        </g>
                    </svg>
                </div>

            </div>

            <div className="scale-y-[-1] -mt-10">
                <svg
                    id="wave"
                    style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
                    viewBox="0 0 1440 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                            <stop stopColor="rgba(255, 95, 30, 0.8)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path

                        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
                        fill="url(#sw-gradient-0)"
                        d="M0,98L10.9,102.7C21.8,107,44,117,65,107.3C87.3,98,109,70,131,60.7C152.7,51,175,61,196,56C218.2,51,240,33,262,25.7C283.6,19,305,23,327,21C349.1,19,371,9,393,14C414.5,19,436,37,458,58.3C480,79,502,103,524,95.7C545.5,89,567,51,589,32.7C610.9,14,633,14,655,14C676.4,14,698,14,720,21C741.8,28,764,42,785,53.7C807.3,65,829,75,851,77C872.7,79,895,75,916,74.7C938.2,75,960,79,982,88.7C1003.6,98,1025,112,1047,112C1069.1,112,1091,98,1113,98C1134.5,98,1156,112,1178,109.7C1200,107,1222,89,1244,72.3C1265.5,56,1287,42,1309,32.7C1330.9,23,1353,19,1375,35C1396.4,51,1418,89,1440,93.3C1461.8,98,1484,70,1505,53.7C1527.3,37,1549,33,1560,30.3L1570.9,28L1570.9,140L1560,140C1549.1,140,1527,140,1505,140C1483.6,140,1462,140,1440,140C1418.2,140,1396,140,1375,140C1352.7,140,1331,140,1309,140C1287.3,140,1265,140,1244,140C1221.8,140,1200,140,1178,140C1156.4,140,1135,140,1113,140C1090.9,140,1069,140,1047,140C1025.5,140,1004,140,982,140C960,140,938,140,916,140C894.5,140,873,140,851,140C829.1,140,807,140,785,140C763.6,140,742,140,720,140C698.2,140,676,140,655,140C632.7,140,611,140,589,140C567.3,140,545,140,524,140C501.8,140,480,140,458,140C436.4,140,415,140,393,140C370.9,140,349,140,327,140C305.5,140,284,140,262,140C240,140,218,140,196,140C174.5,140,153,140,131,140C109.1,140,87,140,65,140C43.6,140,22,140,11,140L0,140Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,98L10.9,86.3C21.8,75,44,51,65,44.3C87.3,37,109,47,131,60.7C152.7,75,175,93,196,88.7C218.2,84,240,56,262,51.3C283.6,47,305,65,327,72.3C349.1,79,371,75,393,70C414.5,65,436,61,458,51.3C480,42,502,28,524,30.3C545.5,33,567,51,589,65.3C610.9,79,633,89,655,95.7C676.4,103,698,107,720,91C741.8,75,764,37,785,21C807.3,5,829,9,851,9.3C872.7,9,895,5,916,14C938.2,23,960,47,982,60.7C1003.6,75,1025,79,1047,74.7C1069.1,70,1091,56,1113,49C1134.5,42,1156,42,1178,53.7C1200,65,1222,89,1244,81.7C1265.5,75,1287,37,1309,39.7C1330.9,42,1353,84,1375,91C1396.4,98,1418,70,1440,65.3C1461.8,61,1484,79,1505,84C1527.3,89,1549,79,1560,74.7L1570.9,70L1570.9,140L1560,140C1549.1,140,1527,140,1505,140C1483.6,140,1462,140,1440,140C1418.2,140,1396,140,1375,140C1352.7,140,1331,140,1309,140C1287.3,140,1265,140,1244,140C1221.8,140,1200,140,1178,140C1156.4,140,1135,140,1113,140C1090.9,140,1069,140,1047,140C1025.5,140,1004,140,982,140C960,140,938,140,916,140C894.5,140,873,140,851,140C829.1,140,807,140,785,140C763.6,140,742,140,720,140C698.2,140,676,140,655,140C632.7,140,611,140,589,140C567.3,140,545,140,524,140C501.8,140,480,140,458,140C436.4,140,415,140,393,140C370.9,140,349,140,327,140C305.5,140,284,140,262,140C240,140,218,140,196,140C174.5,140,153,140,131,140C109.1,140,87,140,65,140C43.6,140,22,140,11,140L0,140Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,84L10.9,88.7C21.8,93,44,103,65,88.7C87.3,75,109,37,131,25.7C152.7,14,175,28,196,39.7C218.2,51,240,61,262,58.3C283.6,56,305,42,327,32.7C349.1,23,371,19,393,23.3C414.5,28,436,42,458,58.3C480,75,502,93,524,93.3C545.5,93,567,75,589,72.3C610.9,70,633,84,655,77C676.4,70,698,42,720,39.7C741.8,37,764,61,785,67.7C807.3,75,829,65,851,65.3C872.7,65,895,75,916,70C938.2,65,960,47,982,32.7C1003.6,19,1025,9,1047,23.3C1069.1,37,1091,75,1113,84C1134.5,93,1156,75,1178,70C1200,65,1222,75,1244,86.3C1265.5,98,1287,112,1309,114.3C1330.9,117,1353,107,1375,88.7C1396.4,70,1418,42,1440,42C1461.8,42,1484,70,1505,67.7C1527.3,65,1549,33,1560,16.3L1570.9,0L1570.9,140L1560,140C1549.1,140,1527,140,1505,140C1483.6,140,1462,140,1440,140C1418.2,140,1396,140,1375,140C1352.7,140,1331,140,1309,140C1287.3,140,1265,140,1244,140C1221.8,140,1200,140,1178,140C1156.4,140,1135,140,1113,140C1090.9,140,1069,140,1047,140C1025.5,140,1004,140,982,140C960,140,938,140,916,140C894.5,140,873,140,851,140C829.1,140,807,140,785,140C763.6,140,742,140,720,140C698.2,140,676,140,655,140C632.7,140,611,140,589,140C567.3,140,545,140,524,140C501.8,140,480,140,458,140C436.4,140,415,140,393,140C370.9,140,349,140,327,140C305.5,140,284,140,262,140C240,140,218,140,196,140C174.5,140,153,140,131,140C109.1,140,87,140,65,140C43.6,140,22,140,11,140L0,140Z"></path>
                </svg>
            </div>



            <div className="flex flex-row gap-2">
                <div className="w-1/2 flex justify-center items-center">
                    <Image
                        src="/image/logo.png"
                        alt="Beekeepers"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="rounded-full h-full w-1/2"
                    />
                </div>

                <div className="w-1/2">
                    <h2 className="text-amber-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">About Our Company</h3>
                    <p className="text-gray-600 mb-4">
                        Our company was founded in 2001. Our honey is 100% natural. We bring
                        to you honey straight from the hive, unheated, unprocessed,
                        unpasteurized.
                    </p>
                    <p className="text-gray-600 mb-4">
                        We have been producing honey for many years and we are undeniably
                        proud of the quality of our products.
                    </p>
                    <p className="text-gray-600 mb-6">
                        The term beekeeper refers to a person who keeps honey bees in beehives,
                        boxes, or other receptacles. The beekeeper does not control the creatures.
                        The beekeeper owns the hives or boxes and associated equipment. The
                        bees are free to forage or leave as they desire.
                    </p>
                    <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch Video
                    </button>
                </div>
            </div>


        </section>
    )
}

